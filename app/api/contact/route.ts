import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.serviceInterest || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email configuration
    const RECIPIENT_EMAIL = 'andrewbergeron999@gmail.com';

    // For production: Use Resend or another email service
    // For now, we'll use a simple SMTP approach with nodemailer

    // Check if we have email service configured
    if (!process.env.SMTP_HOST && !process.env.RESEND_API_KEY) {
      // Log the contact form submission for development
      console.log('='.repeat(50));
      console.log('NEW CONTACT FORM SUBMISSION');
      console.log('='.repeat(50));
      console.log(`Name: ${data.name}`);
      console.log(`Email: ${data.email}`);
      console.log(`Phone: ${data.phone || 'Not provided'}`);
      console.log(`Company: ${data.company || 'Not provided'}`);
      console.log(`Service Interest: ${data.serviceInterest}`);
      console.log(`Message:\n${data.message}`);
      console.log('='.repeat(50));

      // Return success (in development, emails are logged)
      return NextResponse.json(
        {
          message: 'Form submitted successfully',
          note: 'Email service not configured. Contact logged to console.'
        },
        { status: 200 }
      );
    }

    // If Resend is configured
    if (process.env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Axis Automated Systems <onboarding@resend.dev>',
          to: [RECIPIENT_EMAIL],
          subject: `New Contact Form: ${data.serviceInterest}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
            <p><strong>Service Interest:</strong> ${data.serviceInterest}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email via Resend');
      }
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
