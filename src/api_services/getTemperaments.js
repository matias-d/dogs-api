/* eslint-disable camelcase */
const onlyTemperamentsFormat = require('../utils/onlyTemperamentsFormat.js')
const axios = require('axios')
const API_URL = require('./API_URL.js')
async function getTemperaments () {
  try {
    const result = await axios(API_URL)
    const data = await result.data

    const allTemperaments = onlyTemperamentsFormat(data)
    return allTemperaments
  } catch (err) {
    throw Error(err.message)
  }
}

module.exports = getTemperaments
