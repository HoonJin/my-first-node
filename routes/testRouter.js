import { Router } from 'express'

const testRouter = Router()

testRouter.route('/')
  .get(async (req, res) => {
    res.json({test: 'get'})
  })
  .post(async (req, res) => {
    res.json({test: 'post'})
  })

export default testRouter
