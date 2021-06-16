const mongoose = require('mongoose')
const schema = mongoose.Schema

const urlSchema = new schema({
  inputUrl: { type: String, required: true },
  repliedUrl: { type: String, required: true }
})

module.exports = urlSchema