'use strict'

const express = require('express')
const app = express()
const path = require('path')

// Static css/js files
app.use('/', express.static('./dist'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/dist/index.html')))

const port = 3001

// Start server
app.listen(port, () => console.log('Listening on ' + port))
