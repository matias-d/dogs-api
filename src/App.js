const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const dogsRoutes = require('./routes/Dogs.routes')
const temperamentsRoutes = require('./routes/Temperaments.routes.js')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/dogs', dogsRoutes)
app.use('/temperaments', temperamentsRoutes)

module.exports = app
