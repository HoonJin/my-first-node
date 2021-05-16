import { Sequelize } from 'sequelize'
import { MYSQL } from '../config.js'

export const sequelize = new Sequelize(MYSQL)

export const db = {
  sequelize: sequelize
}
 