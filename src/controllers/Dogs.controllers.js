/* eslint-disable camelcase */

const dogsService = require('../services/Dogs.services')
async function getAllBreeds (req, res) {
  try {
    const allBreeds = await dogsService.getAllBreeds()

    res.status(200).json(allBreeds)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function getBreedById (req, res) {
  const { idRaza } = req.params

  const typeId = isNaN(idRaza) ? 'dbb' : 'api'

  try {
    const breedById = await dogsService.getBreedById(idRaza, typeId)
    res.status(200).json(breedById)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function postNewBreed (req, res) {
  const { image, name, height, weight, life_span, temperaments } = req.body

  if (!image || !name || !height || !weight || !life_span || !temperaments) {
    return res.status(400).json({ error: 'Faltan datos que completar!' })
  }

  try {
    const newBreed = {
      image,
      name,
      height,
      weight,
      life_span
    }
    const newBreedResult = await dogsService.createNewBreed(newBreed, temperaments)
    res.status(200).json(newBreedResult)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

async function getBreedByName (req, res) {
  const { q } = req.query
  if (!q) {
    return res.status(400).json({ error: 'Se necesita la query para buscar las razas!' })
  }
  try {
    const breedByName = await dogsService.getBreedByName(q)
    res.status(200).json(breedByName)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  getAllBreeds,
  getBreedById,
  postNewBreed,
  getBreedByName
}
