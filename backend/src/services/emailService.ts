import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env['SMTP_HOST'],
  port: Number(process.env['SMTP_PORT'] ?? 587),
  secure: process.env['SMTP_SECURE'] === 'true',
  auth: {
    user: process.env['SMTP_USER'],
    pass: process.env['SMTP_PASS'],
  },
})

interface ContactPayload {
  name: string
  email: string
  message: string
  company?: string
  phone?: string
}

export async function sendUserConfirmation(data: ContactPayload) {
  const companyLine = data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''
  const phoneLine   = data.phone   ? `<p><strong>Phone:</strong> ${data.phone}</p>`   : ''

  await transporter.sendMail({
    from: `"Tech Hermanos" <${process.env['SMTP_USER']}>`,
    to: data.email,
    subject: "We got your message — Tech Hermanos",
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#F5EFEB;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5EFEB;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(47,65,86,0.10);">

        <!-- Header -->
        <tr>
          <td style="background:#2F4156;padding:32px 40px;text-align:center;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">
              Tech Hermanos
            </p>
            <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.60);">
              Digital Solutions Agency
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 40px 32px;">
            <p style="margin:0 0 16px;font-size:16px;color:#2F4156;font-weight:600;">
              Hi ${data.name},
            </p>
            <p style="margin:0 0 24px;font-size:15px;color:#5a6a7a;line-height:1.6;">
              Thanks for reaching out! We've received your message and will get back to you within <strong>24 hours</strong>.
            </p>

            <!-- Summary box -->
            <table width="100%" cellpadding="0" cellspacing="0"
              style="background:#F5EFEB;border-radius:10px;padding:20px 24px;margin-bottom:28px;">
              <tr><td>
                <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:#6D1020;text-transform:uppercase;letter-spacing:0.06em;">
                  Your submission
                </p>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                ${companyLine}
                ${phoneLine}
                <p style="margin:12px 0 0;"><strong>Message:</strong></p>
                <p style="margin:6px 0 0;color:#5a6a7a;line-height:1.6;">${data.message}</p>
              </td></tr>
            </table>

            <p style="margin:0;font-size:15px;color:#5a6a7a;line-height:1.6;">
              In the meantime, feel free to reply to this email if you have anything to add.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #e8e0da;text-align:center;">
            <p style="margin:0;font-size:13px;color:#9aabbb;">
              © ${new Date().getFullYear()} Tech Hermanos ·
              <a href="mailto:hello@techhermanos.com" style="color:#6D1020;text-decoration:none;">
                hello@techhermanos.com
              </a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
  })
}

export async function sendTeamNotification(data: ContactPayload) {
  const companyLine = data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : '<p><strong>Company:</strong> <em>not provided</em></p>'
  const phoneLine   = data.phone   ? `<p><strong>Phone:</strong> ${data.phone}</p>`     : '<p><strong>Phone:</strong> <em>not provided</em></p>'

  await transporter.sendMail({
    from: `"Tech Hermanos Site" <${process.env['SMTP_USER']}>`,
    to: process.env['TEAM_EMAIL'] ?? process.env['SMTP_USER'],
    replyTo: data.email,
    subject: `New lead: ${data.name}`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#1e2d3c;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#1e2d3c;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#253545;border-radius:16px;overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="background:#6D1020;padding:24px 32px;">
            <p style="margin:0;font-size:18px;font-weight:700;color:#ffffff;">
              New Contact Form Submission
            </p>
            <p style="margin:4px 0 0;font-size:13px;color:rgba(255,255,255,0.70);">
              ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}
            </p>
          </td>
        </tr>

        <!-- Details -->
        <tr>
          <td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0"
              style="background:#1e2d3c;border-radius:10px;padding:20px 24px;">
              <tr><td style="color:#c8d9e6;font-size:14px;line-height:2;">
                <p style="margin:0;"><strong style="color:#ffffff;">Name:</strong> ${data.name}</p>
                <p style="margin:0;"><strong style="color:#ffffff;">Email:</strong>
                  <a href="mailto:${data.email}" style="color:#6D1020;">${data.email}</a>
                </p>
                ${companyLine.replace(/color:#[^;]+/g, 'color:#c8d9e6').replace(/<strong>/g, '<strong style="color:#ffffff;">')}
                ${phoneLine.replace(/color:#[^;]+/g, 'color:#c8d9e6').replace(/<strong>/g, '<strong style="color:#ffffff;">')}
              </td></tr>
            </table>

            <p style="margin:24px 0 8px;font-size:13px;font-weight:600;color:#6D1020;text-transform:uppercase;letter-spacing:0.06em;">
              Message
            </p>
            <table width="100%" cellpadding="0" cellspacing="0"
              style="background:#1e2d3c;border-left:3px solid #6D1020;border-radius:0 10px 10px 0;padding:16px 20px;">
              <tr><td style="font-size:14px;color:#c8d9e6;line-height:1.7;">
                ${data.message}
              </td></tr>
            </table>

            <p style="margin:28px 0 0;text-align:center;">
              <a href="mailto:${data.email}"
                style="display:inline-block;background:#6D1020;color:#fff;font-size:14px;font-weight:600;
                padding:12px 28px;border-radius:8px;text-decoration:none;">
                Reply to ${data.name} ↗
              </a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
  })
}
