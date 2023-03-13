const { DataTypes } = require('sequelize')

module.exports = (db) => {
  db.define('Temperament', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  })
}
