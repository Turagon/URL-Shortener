const mongoose = require('mongoose')
const schema = mongoose.Schema

const urlSchema = new schema({
  inputUrl: { type: String, required: true, unique: true },
  repliedString: { type: String, required: true, unique: true }
})

module.exports = mongoose.model('urlSchema', urlSchema)