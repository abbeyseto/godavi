import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === 'POST') {
    try {
      // Extract form data from request body
      const body = await req.json();
      const { to, subject, text, html } = body;

      // Construct Mailgun API request parameters
      const formData = new FormData();
      formData.append('from', `Godavi LLC Store Contact <${process.env.EMAIL_FROM}>`);
      formData.append('to', to);
      formData.append('subject', subject);
      formData.append('text', text);
      formData.append('html', html);

      // Make POST request to Mailgun API
      const response = await fetch(`https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString('base64')}`,
        },
        body: formData,
      });

      if (response.status === 200) {
        // Return success response
        return NextResponse.json({ status: response.status, message: 'Email sent successfully' });
      } else {
        // Handle error response
        const errorData = await response.json();
        console.error('Error sending email:', errorData);
        return NextResponse.json({ status: response.status, message: 'Failed to send email' });
      }
    } catch (error) {
      // Return error response
      console.error('Error sending email:', error);
      return NextResponse.json({ status: 500, message: 'Internal Server Error' });
    }
  } else {
    // Return error if request method is not allowed
    return NextResponse.json({ status: 500, message: 'Method Not Allowed' });
  }
}
