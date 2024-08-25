const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>HELLO<h1/>')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
