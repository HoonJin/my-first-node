import { Sequelize } from 'sequelize'

export default class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
    }, {
      sequelize,
      timestamps: true,
      // underscored: true,
      modelName: 'User',
      // tableName: 'users',
      paranoid: true
    })
  }
}
