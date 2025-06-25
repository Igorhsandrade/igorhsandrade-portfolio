# 🔧 Fixing "Invalid key type" Error

The "Invalid key type" error you're seeing typically means there's a configuration issue with your reCAPTCHA keys. Here's how to fix it:

## 🔍 Quick Diagnosis

1. **Check your browser console** for more detailed error messages
2. **Verify your domain setup** in Google reCAPTCHA admin
3. **Confirm you're using the right reCAPTCHA version**

## 🛠️ Step-by-Step Fix

### 1. Verify Your reCAPTCHA Setup

Visit [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin) and check:

- ✅ **reCAPTCHA Type**: Must be **"reCAPTCHA v2"** → **"I'm not a robot" Checkbox**
- ✅ **Domains**: Must include `localhost` (for development)
- ✅ **Keys**: Copy the exact Site Key and Secret Key

### 2. Common Issues and Solutions

**Problem**: Using reCAPTCHA v3 keys with v2 implementation
**Solution**: Create new reCAPTCHA v2 keys or switch to v3 implementation

**Problem**: Domain not registered
**Solution**: Add `localhost` to your domain list in reCAPTCHA admin

**Problem**: Test/demo keys
**Solution**: Generate real keys from Google reCAPTCHA admin

### 3. Create New reCAPTCHA Keys (Recommended)

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Click **"+"** to create a new site
3. Choose settings:
   - **Label**: "Portfolio Contact Form" (or any name)
   - **reCAPTCHA type**: **"reCAPTCHA v2"**
   - **Sub-type**: **"I'm not a robot" Checkbox**
   - **Domains**:
     - `localhost` (for development)
     - `127.0.0.1` (alternative for development)
     - `yourdomain.com` (for production)
4. Accept Terms of Service
5. Click **"Submit"**
6. Copy your new keys

### 4. Update Your Environment Variables

Replace the keys in your `.env.local` file:

```env
# Google reCAPTCHA v2 Keys
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_new_site_key_here
RECAPTCHA_SECRET_KEY=your_new_secret_key_here
```

### 5. Restart Your Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart
npm run dev
```

## 🧪 Development Mode

I've added a development bypass that allows the form to work without reCAPTCHA when keys are not configured:

- ✅ Form still validates all fields
- ✅ API still processes submissions
- ⚠️ reCAPTCHA verification is bypassed in development
- 🔒 Production still requires valid reCAPTCHA

## 🚨 If Still Not Working

Try these additional steps:

1. **Clear browser cache** and refresh
2. **Check browser console** for detailed error messages
3. **Try a different browser** or incognito mode
4. **Temporarily disable browser extensions**
5. **Check network tab** for failed requests

## 📞 Test Without reCAPTCHA

The form now works in development mode even without valid reCAPTCHA keys, so you can test the contact form functionality while fixing the reCAPTCHA setup.

## 🎯 Expected Behavior After Fix

- ✅ reCAPTCHA widget loads without errors
- ✅ "I'm not a robot" checkbox appears
- ✅ Form submits successfully after verification
- ✅ No console errors

Let me know if you need help with any of these steps!
