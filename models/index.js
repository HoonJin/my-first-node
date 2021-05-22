import { Sequelize } from 'sequelize'
import Config from '../config.js'

const dbConfig = Config.MYSQL
export const sequelize = new Sequelize({
  database: dbConfig.DATABASE,
  username: dbConfig.USERNAME,
  password: dbConfig.PASSWORD,
  host: dbConfig.HOST,
  dialect: 'mysql',
  pool: {
    min: dbConfig.POOL_MIN,
    max: dbConfig.POOL_MAX,
  }
})

export const db = {
  sequelize: sequelize
}
 