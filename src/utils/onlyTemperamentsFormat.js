function onlyTemperamentsFormat (data) {
  let allTemperaments = []
  data.forEach(temp => {
    if (temp.temperament) allTemperaments.push(temp.temperament.split(', ')) // Convertimos la cadena de strings en un array separados por las ",", luego la pusheamos en nuestro array, esto creara una array con varias matrizes
  })
  allTemperaments = allTemperaments.flat() // Aplanamos la matriz, cosa que solo queden un array con los strings de los temeperamentos
  allTemperaments = allTemperaments.filter((temp, index) => allTemperaments.indexOf(temp) === index) // Filtramos todos los temperamentos que no esten repetidos
  allTemperaments = allTemperaments.map(temp => ({ name: temp })) // convertimos a un array de objetos con la clave "name" y el valor del string temperamentos
  return allTemperaments
}

module.exports = onlyTemperamentsFormat
