import dotenv from 'dotenv'

dotenv.config()

const e = process.env

export const NODE_ENV = e.NODE_ENV
export const PORT = e.PORT
