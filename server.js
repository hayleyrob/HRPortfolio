require('dotenv').config()
const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})

require('mongoose').connect(process.env.ORMONGO_URL|| process.env.LOCAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(process.env.PORT || 8000))
  .catch(err => console.error(err))