const express = require('express')
const showData = require('./showData')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
  return res.render('index', { showData })
})

app.get('/seasons/:number', (req, res) => {
  const foundSeason = showData.seasons.find((sea) => {
    return sea.number === parseInt(req.params.number)
  })

  return res.render('seasons', { sea: foundSeason, title: showData.title })
})

app.all('*', (req, res) => {
  return res.sendStatus(404)
})

app.listen(1337, () => {
  console.log('what') // eslint-isable-line no console
})

