const express = require('express')
const router = express.Router()
const shortenerSchema = require('../../models/shortenerSchema')
const randomString = require('../../public/javascripts/randomString')

router.post('/', (req, res) => {
  const originURL = req.body.originURL
  const protocol = req.protocol
  const host = req.headers.host
  const url = req.originalUrl
  shortenerSchema.find()
    .lean()
    .then(results => {
      const string = randomString(...results)
      shortenerSchema.create({
        inputUrl: originURL,
        repliedString: string
      })
      .then(() => {
        const shortener = `${protocol}://${host}${url}/${string}`
        res.render('result', { shortener })
      })
      .catch(err => {
        next(err)
      })
    })
    .catch(err => {
      next(err)
    })
})

router.get('/:id', (req, res) => {
  const replyString = req.params.id
  shortenerSchema.find({repliedString: replyString})
    .then(result => {
      res.redirect(`${result[0].inputUrl}`)
    })
    .catch(() => {
      res.send('there is no this record')
    })
})

module.exports = router