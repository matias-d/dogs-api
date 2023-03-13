/* eslint-disable camelcase */
const temperamentsFormat = require('../utils/temperamentsFormat.js')
const axios = require('axios')
const API_URL = require('./API_URL.js')
const parsedMetricFormat = require('../utils/parsedMetricFormat.js')
async function getBreeds () {
  try {
    const result = await axios(API_URL)
    const data = await result.data
    const breedsFormat = data.map(breed => {
      const { id, image, name, weight, temperament } = breed
      const { metric } = weight
      const { url } = image
      return { id, image: url, name, metric, temperament, created: false }
    })

    temperamentsFormat(breedsFormat)

    parsedMetricFormat(breedsFormat, 'weight')

    return breedsFormat
  } catch (err) {
    throw Error(err.message)
  }
}

module.exports = getBreeds
