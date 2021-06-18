const express = require('express')
const router = express.Router()
const shortenerSchema = require('../../models/shortenerSchema')
const randomString = require('../../public/javascripts/randomString')
const urlCheck = require('../../public/javascripts/urlCheck')

router.post('/', (req, res) => {
  const originURL = req.body.originURL
  const protocol = req.protocol
  const host = req.headers.host
  const url = req.originalUrl
  if (urlCheck(originURL)) {
    shortenerSchema.find()
      .lean()
      .then(results => {
        const containDuplicate = results.filter(item => {
          return item.inputUrl === originURL
        })
        if (!containDuplicate[0]) {
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
            console.log('data mistake')
          })
        } else {
          const shortener = `${protocol}://${host}${url}/${containDuplicate[0].repliedString}`
          res.render('result', { shortener })
        }
      })
      .catch(err => {
        console.log('data mistake')
      })
  } else {
    const note = "Please input complete http format"
    res.render('index', { originURL, note })
  }
})

router.get('/:id', (req, res) => {
  const replyString = req.params.id
  shortenerSchema.find({repliedString: replyString})
    .then(result => {
      res.redirect(`${result[0].inputUrl}`)
    })
    .catch(err => {
      res.send('Sorry, we can not find your URL link')
    })
})

module.exports = router