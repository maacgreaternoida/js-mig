# EmailJS Setup Guide for Contact Form

## Problem
Your contact form is working in development but not in production on Vercel because EmailJS environment variables are not configured.

## Solution Steps

### 1. Get EmailJS Credentials

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up or log in to your account
3. Create a new Email Service (Gmail, Outlook, etc.)
4. Create a new Email Template
5. Get your credentials:
   - **Service ID**: Found in Email Services section
   - **Template ID**: Found in Email Templates section  
   - **Public Key**: Found in Account > API Keys section

### 2. Configure Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** > **Environment Variables**
4. Add the following environment variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 3. Email Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - User's name
- `{{email}}` - User's email
- `{{phone}}` - User's phone number
- `{{preferredCourse}}` - Selected course

### 4. Redeploy

After adding environment variables:
1. Go to **Deployments** in Vercel
2. Click **Redeploy** on your latest deployment
3. Or push a new commit to trigger a new deployment

### 5. Test the Form

1. Go to your live website
2. Fill out the contact form
3. Check the browser console for EmailJS configuration status
4. Verify emails are being sent

## Alternative Solutions

### Option 1: Use Vercel Functions (Recommended)
Instead of EmailJS, you could create a Vercel serverless function to handle email sending:

```typescript
// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, course } = req.body

  // Configure your email service here
  const transporter = nodemailer.createTransporter({
    // Your email service configuration
  })

  try {
    await transporter.sendMail({
      from: 'your-email@domain.com',
      to: 'info@maacgreaternoida.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Preferred Course:</strong> ${course}</p>
      `
    })

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ message: 'Failed to send email' })
  }
}
```

### Option 2: Use a Different Email Service
Consider using services like:
- SendGrid
- Mailgun
- AWS SES
- Resend

## Debugging

If the form still doesn't work after configuration:

1. **Check Browser Console**: Look for EmailJS configuration logs
2. **Verify Environment Variables**: Ensure they're properly set in Vercel
3. **Test EmailJS Service**: Verify your EmailJS service is active
4. **Check Template**: Ensure your email template variables match the code

## Current Status

Your form currently falls back to console logging when EmailJS is not configured. This is why it appears to work (shows success message) but doesn't actually send emails in production. 