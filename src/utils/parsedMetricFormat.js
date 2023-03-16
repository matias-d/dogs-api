function parsedMetricFormat (breedsFormat, element) {
  breedsFormat.forEach(breed => {
    const [min, max] = breed.metric.split(' - ').map(m => parseInt(m)) // "20 - 40" > [20, 40]
    const toObject = {
      [`min_${element}`]: min,
      [`max_${element}`]: max
    }
    breed[element] = toObject
    delete breed.metric
  })
}

module.exports = parsedMetricFormat
