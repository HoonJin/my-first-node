import express from 'express'
import testRouter from './routes/testRouter.js'
import userRouter from './routes/userRouter.js'
import Config from './config.js'
import { sequelize } from './models/index.js'
import UAParser from 'ua-parser-js'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'


sequelize
  // .validate()
  .sync({ force: false })
  .then((db) => {
    console.log(`데이터베이스 연결 ${db.options.database}`)
  })
  .catch((err) => {
    console.error('error!!!!', err)
  })

const app = express()
app.use(express.json())

app.use(async (req, _, next) => {
  req.ua = new UAParser(req.header('user-agent'))
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
app.use(userRouter)
app.get('/', async (req, res) => {
  res.json({})
})

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'test swagger',
      version: '0.0.1',
    }
  },
  apis: ['./routes/*.js']
}

const swaggerSpec = await swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

app.use((err, req, res, _) => {
  console.error(`[${Date.now()}|${req.ip}] ${req.method} ${req.path}`, err)
  const code = {
    'BadRequestError': 400,
  }[err.name] || 500
  res.status(code).json({error: err.name})
})
app.listen(Config.PORT, _ => { console.warn(`@@@ application is started. NODE_ENV: ${Config.NODE_ENV}, PORT: ${Config.PORT}`) })
