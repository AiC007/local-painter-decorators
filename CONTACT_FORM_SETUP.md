# Contact Form Setup Instructions

The contact form is configured to send enquiries to **ai@theaiconsultancy.ai**.

## Setup Steps

### 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address

### 2. Get Your API Key

1. Log in to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Local Painter Decorators Contact Form")
4. Copy the API key (starts with `re_`)

### 3. Add API Key to Vercel

1. Go to your Vercel project dashboard
2. Click on "Settings" → "Environment Variables"
3. Add a new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your Resend API key (paste the `re_...` key)
   - **Environment:** Production, Preview, Development (select all)
4. Click "Save"

### 4. Redeploy

Vercel should automatically redeploy after adding the environment variable. If not:
1. Go to "Deployments" tab
2. Click the three dots on the latest deployment
3. Click "Redeploy"

### 5. Verify Domain (Optional but Recommended)

By default, Resend sends emails from `onboarding@resend.dev`. To use your own domain:

1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., `localpainteranddecorators.co.uk`)
3. Follow the DNS setup instructions
4. Once verified, update the `from` field in `/app/api/contact/route.ts`:
   ```typescript
   from: 'Local Painter & Decorators <noreply@localpainteranddecorators.co.uk>'
   ```

## Testing

1. Go to your live site's contact page
2. Fill out the form
3. Submit
4. Check `ai@theaiconsultancy.ai` for the email
5. Check Resend dashboard for delivery status

## Email Format

Each submission includes:
- Contact Information (name, email, phone, postcode)
- Project Details (property type, rooms, preferred date)
- Additional message
- Reply-To set to customer's email for easy response

## Troubleshooting

- **No emails received:** Check Resend dashboard for errors
- **401 Unauthorized:** API key not set correctly in Vercel
- **500 Error:** Check Vercel function logs for details
- **Rate limit:** Free tier is 100 emails/day

## Alternative: Using Your Own SMTP

If you prefer to use your own email server instead of Resend, you can modify `/app/api/contact/route.ts` to use Nodemailer with your SMTP credentials.
