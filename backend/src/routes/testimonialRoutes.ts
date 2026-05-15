import { Router } from 'express'
import {
  getAllTestimonials,
  getFeaturedTestimonials,
  createTestimonial,
  deleteTestimonial,
} from '../controllers/testimonialController'

const router = Router()

router.get('/', getAllTestimonials)
router.get('/featured', getFeaturedTestimonials)
router.post('/', createTestimonial)
router.delete('/:id', deleteTestimonial)

export default router
