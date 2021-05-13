import express from 'express'
import dotenv from 'dotenv'
import testRouter from './routes/test.js'

const app = express()
app.use(express.json())
dotenv.config()

const port = process.env.PORT
// app.set('port', port)
app.use(async (req, _, next) => {
  switch (req.method) {
    case 'GET':
      console.log(`[${Date.now()}|${req.ip}] ${req.method} ${req.path} query: ${JSON.stringify(req.query)}`)
      break
    case 'POST':
      console.log(`[${Date.now()}|${req.ip}] ${req.method} ${req.path} ${JSON.stringify(req.body)}`)
      break
    default:
      console.log(`[${Date.now()}|${req.ip}] ${req.method} ${req.path}`)
  } 
  next()
})

app.use('/test', testRouter)

app.get('/', async (req, res) => {
  res.json({})
})

app.listen(port, _ => {
  console.warn(`$$$$ application started on ${port}`)
})
