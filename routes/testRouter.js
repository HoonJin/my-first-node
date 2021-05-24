import { Router } from 'express'

const router = Router()
router
  .get('/exception', (req, res) => {
    throw new Error(req.ua.getResult())
  })
  .route('/')
    .get(async (req, res) => {
      res.json(req.ua.getResult())
    })
    .post(async (req, res) => {
      res.json({test: 'post'})
    })

export default router
