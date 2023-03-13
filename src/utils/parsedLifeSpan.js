/* eslint-disable camelcase */
function parsedLifeSpan (life_span) {
  const [min, max] = life_span.split(' - ').map(num => parseInt(num))
  const toObject = {
    min_life_span: min,
    max_life_span: max
  }
  return toObject
}

module.exports = parsedLifeSpan
