const { Temperament } = require('../database/db.js')
const getTemperamentsAPI = require('../api_services/getTemperaments.js')

async function getAllTemperaments () {
  const allTemperaments = await getTemperamentsAPI()
  const result = await Temperament.findOne({ where: { name: allTemperaments[0].name } })
  if (!result) { await Temperament.bulkCreate(allTemperaments) } // Comprobamos si ya estan, si no es asi, Guardamos en la base de datos todas los temperamentos formateados
  return await Temperament.findAll()
}
module.exports = {
  getAllTemperaments
}
