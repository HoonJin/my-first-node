import dotenv from 'dotenv'

dotenv.config()

const e = process.env

export const PORT = e.PORT
export const ENV = e.ENV
