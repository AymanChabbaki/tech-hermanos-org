import { Request, Response, NextFunction } from 'express'
import { Testimonial } from '../models/Testimonial'

export async function getAllTestimonials(_req: Request, res: Response, next: NextFunction) {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 })
    res.json({ success: true, data: testimonials })
  } catch (err) {
    next(err)
  }
}

export async function getFeaturedTestimonials(_req: Request, res: Response, next: NextFunction) {
  try {
    const testimonials = await Testimonial.find({ featured: true }).sort({ createdAt: -1 })
    res.json({ success: true, data: testimonials })
  } catch (err) {
    next(err)
  }
}

export async function createTestimonial(req: Request, res: Response, next: NextFunction) {
  try {
    const testimonial = await Testimonial.create(req.body)
    res.status(201).json({ success: true, data: testimonial })
  } catch (err) {
    next(err)
  }
}

export async function deleteTestimonial(req: Request, res: Response, next: NextFunction) {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params['id'])
    if (!testimonial) {
      res.status(404).json({ success: false, message: 'Testimonial not found' })
      return
    }
    res.json({ success: true, message: 'Testimonial deleted' })
  } catch (err) {
    next(err)
  }
}
