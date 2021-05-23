import { Router } from 'express'
import User from '../models/user.js'

const router = Router()

router.route('/users')
  .get(async (req, res) => {
    const data = await User.findAll({})
    res.json(data)
  })

router.get('/:id', async (req, res) => {
  res.json({})
})

export default router