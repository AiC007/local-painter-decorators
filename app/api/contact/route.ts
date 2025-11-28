import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, postcode, propertyType, rooms, preferredDate, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !postcode || !propertyType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailConfigured =
      process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'dummy_key_for_build';
    let emailError: Error | null = null;

    if (emailConfigured) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: 'Local Painter & Decorators <onboarding@resend.dev>', // Update with verified domain
        to: ['ai@theaiconsultancy.ai'],
        replyTo: email,
        subject: `New Quote Request from ${name}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Quote Request
          </h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 15px;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #4b5563;">Name:</td>
                <td style="padding: 8px; color: #1f2937;">${name}</td>
              </tr>
              <tr style="background-color: #f9fafb;">
                <td style="padding: 8px; font-weight: bold; color: #4b5563;">Email:</td>
                <td style="padding: 8px; color: #1f2937;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #4b5563;">Phone:</td>
                <td style="padding: 8px; color: #1f2937;">${phone}</td>
              </tr>
              <tr style="background-color: #f9fafb;">
                <td style="padding: 8px; font-weight: bold; color: #4b5563;">Postcode:</td>
                <td style="padding: 8px; color: #1f2937;">${postcode}</td>
              </tr>
            </table>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 15px;">Project Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #4b5563;">Property Type:</td>
                <td style="padding: 8px; color: #1f2937;">${propertyType}</td>
              </tr>
              ${rooms ? `
              <tr style="background-color: #f9fafb;">
                <td style="padding: 8px; font-weight: bold; color: #4b5563;">Rooms/Areas:</td>
                <td style="padding: 8px; color: #1f2937;">${rooms}</td>
              </tr>
              ` : ''}
              ${preferredDate ? `
              <tr>
                <td style="padding: 8px; font-weight: bold; color: #4b5563;">Preferred Start Date:</td>
                <td style="padding: 8px; color: #1f2937;">${preferredDate}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          ${message ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 15px;">Additional Details</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; color: #1f2937;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This enquiry was submitted via the Local Painter & Decorators contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      });

      if (error) {
        emailError = error as Error;
        console.error('Resend error:', error);
      }
    } else {
      console.warn('Contact form submission received but RESEND_API_KEY is not configured.', {
        name,
        phone,
        postcode,
      });
    }

    if (emailError) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: emailConfigured
          ? 'Form submitted successfully'
          : 'Thank you! We have logged your request and will contact you by phone.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
