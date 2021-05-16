import dotenv from 'dotenv'

dotenv.config()

const e = process.env

export const NODE_ENV = e.NODE_ENV
export const PORT = e.PORT
export const MYSQL = {
  database: e.MYSQL_DB,
  username: e.MYSQL_USERNAME,
  password: e.MYSQL_PASSWORD,
  host: e.MYSQL_HOST,
  dialect: 'mysql',
  pool: {
    min: parseInt(e.MYSQL_POOL_MIN),
    max: parseInt(e.MYSQL_POOL_MAX),
  }
}
