const mongoose = require('mongoose')

const UserModel = mongoose.model(
  'users',
  new mongoose.Schema(
    {
      name: {
        required: true,
        type: String
      },
      age: {
        required: true,
        type: Number
      }
    },
    {
      timestamps: true
    }
  )
)

export { UserModel }
