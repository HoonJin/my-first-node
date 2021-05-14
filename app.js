import express from 'express'
import testRouter from './routes/testRouter.js'
import { ENV, PORT } from './config.js'

const app = express()
app.use(express.json())

app.use(async (req, _, next) => {
  switch (req.method) {
    case 'GET':
      console.log(`[${Date.now()}|${req.ip}] ${req.method} ${req.path} query: ${JSON.stringify(req.query)}`)
      break
    case 'POST':
      console.log(`[${Date.now()}|${req.ip}] ${req.method} ${req.path} body: ${JSON.stringify(req.body)}`)
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

app.listen(PORT, _ => { console.warn(`@@@ application is started. ENV: ${ENV}, PORT: ${PORT}`) })
