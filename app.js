// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
import testRouter from './router/test.js'

const app = express()
dotenv.config()

const port = process.env.PORT
app.set('port', port)
app.use(async (req, res, next) => {
  console.log(`[${Date()}|${req.ip}] ${req.method} ${req.path}`)
  next()
})

app.use('/test', testRouter)

app.get('/', async (req, res) => {
  res.json({})
})

app.listen(port, _ => {
  console.warn(`$$$$ application started on ${port}`)
})
