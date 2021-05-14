import { Router } from 'express'
import UAParser from 'ua-parser-js'

const testRouter = Router()

testRouter
  .use((req, res, next) => {
    req.ua = new UAParser(req.header('user-agent'))
    next()
  })
  .route('/')
    .get(async (req, res) => {
      res.json(req.ua.getResult())
    })
    .post(async (req, res) => {
      res.json({test: 'post'})
    })

export default testRouter
