import dotenv from 'dotenv'
dotenv.config()

import app from './app'

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000

function bootstrap() {
  try {
    app.listen(PORT, () => {
      console.log(`Server running → http://localhost:${PORT}`)
    })
  } catch (err) {
    console.error('Failed to start server:', err)
    process.exit(1)
  }
}

bootstrap()
