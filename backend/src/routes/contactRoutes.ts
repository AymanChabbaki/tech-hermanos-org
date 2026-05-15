import { Router } from 'express'
import {
  submitContact,
  getAllContacts,
  updateContactStatus,
} from '../controllers/contactController'

const router = Router()

router.post('/', submitContact)
router.get('/', getAllContacts)
router.patch('/:id/status', updateContactStatus)

export default router
