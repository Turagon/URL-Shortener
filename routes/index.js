const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const shortener = require('./modules/shortener')

router.use('/', home)
// router.use('/convert', shortener)

module.exports = router