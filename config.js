import dotenv from 'dotenv'

const env = process.env.NODE_ENV || 'local'
dotenv.config()
const e = process.env

export default {
  NODE_ENV: env,
  PORT: e.PORT,
  MYSQL: {
    DATABASE: e.MYSQL_DATABASE,
    USERNAME: e.MYSQL_USERNAME,
    PASSWORD: e.MYSQL_PASSWORD,
    HOST: e.MYSQL_HOST,
    POOL_MIN: parseInt(e.MYSQL_POOL_MIN) || 5,
    POOL_MAX: parseInt(e.MYSQL_POOL_MAX) || 20,
  }
}
