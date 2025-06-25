# Google reCAPTCHA Setup Instructions

This project includes Google reCAPTCHA v2 integration in the contact form for spam protection.

## Setup Steps

### 1. Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "+" to create a new site
3. Choose **reCAPTCHA v2** → "I'm not a robot" Checkbox
4. Add your domain(s):
   - For development: `localhost`
   - For production: `yourdomain.com`
5. Accept the Terms of Service
6. Click "Submit"

### 2. Configure Environment Variables

Create or update your `.env.local` file with your reCAPTCHA keys:

```env
# Google reCAPTCHA v2 Keys
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

**Important:**
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - This is exposed to the client (must start with `NEXT_PUBLIC_`)
- `RECAPTCHA_SECRET_KEY` - This is server-side only (keep this secret!)

### 3. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out the form
4. Complete the reCAPTCHA challenge
5. Submit the form

### 4. Customization Options

You can customize the reCAPTCHA appearance in `components/contact-form.tsx`:

```tsx
<ReCAPTCHA
  ref={recaptchaRef}
  sitekey={siteKey}
  onChange={handleRecaptchaChange}
  theme="light" // or "dark"
  size="normal" // or "compact"
/>
```

### 5. Form Submission Endpoint

The contact form submits to `/api/contact` which:
- Validates form data
- Verifies reCAPTCHA token with Google
- Processes the form submission (customize this part for your needs)

## Security Notes

- Never expose your secret key in client-side code
- The secret key should only be used on your server
- reCAPTCHA tokens are single-use and expire after a few minutes
- Consider implementing rate limiting for additional protection

## Troubleshooting

**reCAPTCHA not showing:**
- Check that `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
- Verify the domain is registered with Google reCAPTCHA
- Check browser console for errors

**Verification failing:**
- Ensure `RECAPTCHA_SECRET_KEY` is correct
- Check that the token is being passed to the API correctly
- Verify the domain matches your reCAPTCHA configuration

**Development environment:**
- Make sure to add `localhost` to your reCAPTCHA domain list
- Use `127.0.0.1` if `localhost` doesn't work
