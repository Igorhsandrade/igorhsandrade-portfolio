import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  recaptchaToken: string;
}

// Verify reCAPTCHA token with Google
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not configured');
    return false;
  }

  if (!token) {
    console.error('No reCAPTCHA token provided');
    return false;
  }

  try {
    const response = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `secret=${secretKey}&response=${token}`
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}

// Create email transporter
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
}

// Send email function
async function sendEmail(contactData: ContactFormData): Promise<boolean> {
  try {
    const transporter = createTransporter();

    // Email to you (the website owner)
    const mailToOwner = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Subject:</strong> ${contactData.subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${contactData.message.replace(
              /\n/g,
              '<br>'
            )}</p>
          </div>
          
          <p style="color: #888; font-size: 12px; margin-top: 30px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${contactData.name}
        Email: ${contactData.email}
        Subject: ${contactData.subject}
        
        Message:
        ${contactData.message}
      `
    };

    // Send only the notification email to you (no auto-reply)
    await transporter.sendMail(mailToOwner);

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if reCAPTCHA is configured
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const isRecaptchaEnabled = !!(secretKey && siteKey);

    // If reCAPTCHA is enabled, verify the token
    if (isRecaptchaEnabled) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification is required' },
          { status: 400 }
        );
      }

      const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
      if (!isRecaptchaValid) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed' },
          { status: 400 }
        );
      }
    }

    // TODO: Implement your email sending logic here
    // For example, using SendGrid, Nodemailer, or another email service

    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Send email using Nodemailer
    const emailSent = await sendEmail({
      name,
      email,
      subject,
      message,
      recaptchaToken
    });

    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
