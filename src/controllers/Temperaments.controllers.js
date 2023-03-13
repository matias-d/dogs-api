const temperamentsService = require('../services/Temperaments.services.js')

async function getAllTemperaments (req, res) {
  try {
    const allTemperaments = await temperamentsService.getAllTemperaments()
    res.status(200).json(allTemperaments)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

module.exports = {
  getAllTemperaments
}
