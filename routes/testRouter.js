import { Router } from 'express'
import UAParser from 'ua-parser-js'

const testRouter = Router()

testRouter
  .use((req, _, next) => {
    req.ua = UAParser(req.header('user-agent'))
    next()
  })
  .get('/exception', (req, res) => {
    throw new Error(req.ua)
  })
  .route('/')
    .get(async (req, res) => {
      res.json(req.ua)
    })
    .post(async (req, res) => {
      res.json({test: 'post'})
    })

export default testRouter
