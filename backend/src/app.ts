import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import projectRoutes from './routes/projectRoutes'
import testimonialRoutes from './routes/testimonialRoutes'
import contactRoutes from './routes/contactRoutes'
import { errorHandler } from './middleware/errorHandler'

const app = express()

app.use(helmet())
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  }),
)
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* ── API routes ── */
app.use('/api/projects', projectRoutes)
app.use('/api/testimonials', testimonialRoutes)
app.use('/api/contact', contactRoutes)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

/* ── 404 fallback ── */
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' })
})

/* ── Global error handler (must be last) ── */
app.use(errorHandler)

export default app
