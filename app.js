const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const routes = require('./routes')

const app = express()
app.engine('hbs', exphbs({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(routes)

require('./config/mongoose')

app.listen(port, () => {
  console.log('server on')
})