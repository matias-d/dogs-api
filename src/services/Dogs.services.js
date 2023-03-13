
const { Dog, Temperament } = require('../database/db.js')
const getBreedsAPI = require('../api_services/getBreeds.js')
const getBreedAPI = require('../api_services/getBreed.js')
const getBreedByNameAPI = require('../api_services/getBreedByName.js')
async function getAllBreeds () {
  const allBreedsDB = await Dog.findAll({
    attributes: ['id', 'name', 'image', 'weight', 'created'],
    include: {
      model: Temperament,
      attributes: ['name'],
      through: { attributes: [] }
    }
  })
  const allBreedsAPI = await getBreedsAPI()
  const allBreeds = [...allBreedsDB, ...allBreedsAPI]
  return allBreeds
}

async function getBreedById (id, typeId) {
  const breedById = typeId === 'api'
    ? await getBreedAPI(id)
    : await Dog.findOne({
      where: { id },
      include: {
        model: Temperament,
        attributes: ['name'],
        through: {
          attributes: []
        }
      }
    })

  return breedById
}

async function createNewBreed (newBreed, newTemperaments) {
  const existingTemperaments = await Temperament.findAll({
    where: { name: newTemperaments }
  })
  const createdBreed = await Dog.create(newBreed)
  await createdBreed.setTemperaments(existingTemperaments)
  return createdBreed
}

async function getBreedByName (query) {
  const breedsMatchQueryDB = await Dog.findAll({
    where: { name: query },
    attributes: ['id', 'name', 'image', 'weight', 'created'],
    include: {
      model: Temperament,
      attributes: ['name'],
      through: {
        attributes: []
      }
    }
  })

  const breedsMatch = !breedsMatchQueryDB.length
    ? await getBreedByNameAPI(query)
    : breedsMatchQueryDB
  return breedsMatch
}

module.exports = {
  getAllBreeds,
  getBreedById,
  createNewBreed,
  getBreedByName
}
