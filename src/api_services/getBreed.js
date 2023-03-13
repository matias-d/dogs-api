/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const axios = require('axios')
const parsedLifeSpan = require('../utils/parsedLifeSpan.js')
const parsedMetricFormat = require('../utils/parsedMetricFormat.js')
const API_URL = require('./API_URL')
async function getBreed (idRaza) {
  try {
    const result = await axios(`${API_URL}/${idRaza}`)
    const { id, name, weight, height, temperament, life_span, reference_image_id } = await result.data

    const flagWeightMetric = [{ metric: weight.metric }]
    const flagHeightMetric = [{ metric: height.metric }]

    const Temperaments = temperament.split(', ').map(temp => ({ name: temp }))
    const breedFormat = {
      id,
      name,
      Temperaments,
      image: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`,
      created: false
    }
    parsedMetricFormat(flagWeightMetric, 'weight')
    parsedMetricFormat(flagHeightMetric, 'height')

    const parsed_life_span = parsedLifeSpan(life_span)

    breedFormat.weight = flagWeightMetric[0].weight
    breedFormat.height = flagHeightMetric[0].height
    breedFormat.life_span = parsed_life_span

    return breedFormat
  } catch (err) {
    throw Error(err.message)
  }
}

module.exports = getBreed
