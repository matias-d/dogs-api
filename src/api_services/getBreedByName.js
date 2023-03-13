/* eslint-disable camelcase */
const parsedMetricFormat = require('../utils/parsedMetricFormat.js')
const temperamentsFormat = require('../utils/temperamentsFormat.js')
const axios = require('axios')
const API_URL = require('./API_URL')
async function getBreedByName (query) {
  try {
    const result = await axios(`${API_URL}/search?q=${query}`)
    const data = await result.data
    const breedsFormat = data.map(breed => {
      const { id, name, weight, temperament, reference_image_id } = breed
      const { metric } = weight
      return { id, name, metric, temperament, image : `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`  ,created: false }
    })
    temperamentsFormat(breedsFormat)
    parsedMetricFormat(breedsFormat, 'weight')

    return breedsFormat
  } catch (err) {
    throw Error(err.message)
  }
}

module.exports = getBreedByName
