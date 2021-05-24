import { Router } from 'express'
import User from '../models/user.js'

const router = Router()

router.route('/users')
  .get(async (req, res) => {
    const data = await User.findAll({})
    res.json(data)
  })
  .post(async (req, res) => {
    const { email, password } = req.body
    const data = await User.create({
      email, password // same as down
      // email: email, password: password
    })
    res.json(data)
  })

router.route('/users/:id')
  .get(async (req, res) => {
    const data = await User.findOne({
      where: { id: req.params.id }
    })
    res.json(data)
  })
  .put(async (req, res) => {
    const { password } = req.body
    const data = await User.update({
      password
    }, {
      where: { id: req.params.id }
    })
    res.json(data)
  })

export default router
