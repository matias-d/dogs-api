const express = require('express')
const router = express.Router()
const temperamentsController = require('../controllers/Temperaments.controllers')
router
  .get('/', temperamentsController.getAllTemperaments)

module.exports = router
