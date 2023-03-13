const app = require('./src/App.js')
const { db } = require('./src/database/db.js')
const PORT = process.env.PORT || 3001

db.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
  })
})
