require('dotenv').config()
const { Sequelize } = require('sequelize')
const {
  DB_DEPLOY
} = process.env

//  const {  DB_USER,
//   DB_PASSWORD,
//   DB_HOST,} = process.env
const dogsModel = require('../models/Dogs.js')
const temperamentsModel = require('../models/Temperaments.js')

const db = new Sequelize(DB_DEPLOY,
  {
    logging: false,
    native: false,
    define: { timestamps: false }
  }
)

// const db = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`,
//   {
//     logging: false,
//     native: false,
//     define: { timestamps: false }
//   }
// )

// Modelos
dogsModel(db)
temperamentsModel(db)

// Relacion
const { Dog, Temperament } = db.models
Dog.belongsToMany(Temperament, { through: 'dog_temperament' })

Temperament.belongsToMany(Dog, { through: 'dog_temperament' })

module.exports = {
  ...db.models,
  db
}
