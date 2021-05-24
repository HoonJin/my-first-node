import { Router } from 'express'
import User from '../models/user.js'

const router = Router()

router.route('/users')
  /**
   * @swagger
   * /users:
   *   get:
   *     description: 전체 조회
   *     tags: [users]
   *     content: application/json
   *     responses:
   *       200:
   *         description: 성공
   */
  .get(async (req, res) => {
    const data = await User.findAll({})
    res.json(data)
  })

  /**
   * @swagger
   * /users:
   *   post:
   *     description: 회원가입
   *     tags: [users]
   *     requestBody:
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 default: test@test.com
   *               password:
   *                 default: yoursecret
   *     responses:
   *       200:
   *         description: 성공
   */
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
