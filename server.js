const express = require('express')
const morgan = require('morgan')

const app = express()

app.search(morgan('dev'))

app.use((req, res) => {
  res.send('Hello, world!')
})

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})