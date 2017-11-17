const express = require('express')
const favicon = require('serve-favicon')
const app = express()
const path = require('path')

const staticAssets = __dirname + "/public"
const faviconPath = path.join(__dirname, 'public', 'favicon.ico')

app
  .use(express.static(staticAssets))
  .use(favicon(faviconPath))
  .get('/', (req, res) => {
    res.send("Testo!")
  })

app.listen(21517, () => console.log('[INFO] Running server on port 21517'))

