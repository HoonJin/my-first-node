import { Router } from 'express'

const testRouter = Router()

testRouter.get('/', async (req, res) => {
  res.json({test: 'test'})
})

export default testRouter
