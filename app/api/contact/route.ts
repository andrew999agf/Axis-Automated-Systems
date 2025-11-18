import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log the submission (for now)
    console.log('Contact form submission:', data);

    // TODO: Integrate with email service
    // Options:
    // 1. SendGrid: https://sendgrid.com/
    // 2. Resend: https://resend.com/
    // 3. AWS SES: https://aws.amazon.com/ses/
    // 4. Nodemailer with SMTP
    //
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'contact@axisautomated.com',
    //   to: 'your-email@company.com',
    //   subject: `New Contact Form: ${data.serviceInterest}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
    //     <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
    //     <p><strong>Service Interest:</strong> ${data.serviceInterest}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${data.message}</p>
    //   `,
    // });

    // For now, simulate successful submission
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
