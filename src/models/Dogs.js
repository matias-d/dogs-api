const { DataTypes } = require('sequelize')

module.exports = (db) => {
  db.define('Dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        isNumeric: function (value) {
          if (value) {
            const minHeight = parseInt(value.min_height)
            const maxHeight = parseInt(value.max_height)
            if (isNaN(minHeight) || isNaN(maxHeight)) {
              throw new Error('height values must be numeric')
            }
          }
        }
      }
    },
    weight: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        isNumeric: function (value) {
          if (value) {
            const minWeight = parseInt(value.min_weight)
            const maxWeight = parseInt(value.max_weight)
            if (isNaN(minWeight) || isNaN(maxWeight)) {
              throw new Error('height values must be numeric')
            }
          }
        }
      }
    },
    life_span: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        isNumeric: function (value) {
          if (value) {
            const minLifeSpan = parseInt(value.min_life_span)
            const maxLifeSpan = parseInt(value.max_life_span)
            if (isNaN(minLifeSpan) || isNaN(maxLifeSpan)) {
              throw new Error('height values must be numeric')
            }
          }
        }
      }
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  })
}
