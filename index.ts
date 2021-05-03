import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// App init
const app = express()
dotenv.config()

// Main configuration
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json())

app.use('/api/title', (req: any, res: any) => {
   const { title } = req.body
   
   res.json({ title: `${title} title` })
})

// Server function
const start = () => {
   try {
      app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
   } catch(e) {
      console.log(`Error: ${e}`)
   }
}

// Server init
start()
