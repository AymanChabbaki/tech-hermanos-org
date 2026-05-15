import { Request, Response, NextFunction } from 'express'
import { Contact } from '../models/Contact'
import { sendUserConfirmation, sendTeamNotification } from '../services/emailService'

export async function submitContact(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, company, phone, message } = req.body as {
      name?: string
      email?: string
      company?: string
      phone?: string
      message?: string
    }

    if (!name || !email || !message) {
      res.status(400).json({ success: false, message: 'Name, email, and message are required' })
      return
    }

    const contact = await Contact.create({ name, email, company, phone, message })

    // Fire emails — don't let failures block the response
    const payload = { name, email, message, company, phone }
    
    console.log("=== EMAIL DEBUG INFO ===")
    console.log("SMTP_HOST:", process.env['SMTP_HOST'])
    console.log("SMTP_PORT:", process.env['SMTP_PORT'])
    console.log("SMTP_USER:", process.env['SMTP_USER'])
    console.log("Has SMTP_PASS:", !!process.env['SMTP_PASS'])
    console.log("========================")

    Promise.all([
      sendUserConfirmation(payload),
      sendTeamNotification(payload),
    ])
      .then((info) => console.log('Emails sent successfully!', info))
      .catch((err) => {
        console.error('Detailed Email send error:', err)
        if (err.response) console.error('SMTP Response:', err.response)
      })

    res.status(201).json({
      success: true,
      message: "Message received! We'll get back to you soon.",
      data: { id: contact._id },
    })
  } catch (err) {
    next(err)
  }
}

export async function getAllContacts(_req: Request, res: Response, next: NextFunction) {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json({ success: true, data: contacts })
  } catch (err) {
    next(err)
  }
}

export async function updateContactStatus(req: Request, res: Response, next: NextFunction) {
  try {
    const { status } = req.body as { status?: string }
    const contact = await Contact.findByIdAndUpdate(
      req.params['id'],
      { status },
      { new: true, runValidators: true },
    )
    if (!contact) {
      res.status(404).json({ success: false, message: 'Contact not found' })
      return
    }
    res.json({ success: true, data: contact })
  } catch (err) {
    next(err)
  }
}
