function temperamentsFormat (breedsFormat) {
  breedsFormat.forEach(breed => {
    if (breed.temperament) {
      breed.Temperaments = breed.temperament.split(', ').map(t => ({ name: t })) // Creamos una nueva propiedad llamada Temperaments en donde va obtener todos los temperamentos con el formato clave valor de name y el temperamento
      delete breed.temperament // borramos la antigua propiedad temperament
    }
  })
}

module.exports = temperamentsFormat
