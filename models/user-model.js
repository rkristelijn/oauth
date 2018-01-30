var mongoose = require('mongoose'),
  Schema = mongoose.Schema

let UserSchema = Schema({
  displayName: {
    type: String
  },
  image: {
    type: String
  },
  email: {
    type: String
  },
  facebook: {
    type: Object
  },
  twitter: {
    type: Object
  },
  github: {
    type: Object
  },
  google: {
    type: Object
  },
  linkedin: {
    type: Object
  }
})

module.exports = mongoose.model('User', UserSchema)