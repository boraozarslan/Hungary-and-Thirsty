const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("Wohoo!")
})

app.listen(21517, () => console.log('[INFO] Running server on port 21517'))

