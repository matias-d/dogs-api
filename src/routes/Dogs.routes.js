const express = require('express')
const router = express.Router()
const dogsController = require('../controllers/Dogs.controllers')
router
  .get('/', dogsController.getAllBreeds)
  .get('/name', dogsController.getBreedByName)
  .get('/:idRaza', dogsController.getBreedById)
  .post('/', dogsController.postNewBreed)
module.exports = router
