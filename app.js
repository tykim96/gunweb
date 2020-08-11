const express = require('express')
const { handleHome } = require('./controller/homecontroller.js')
const app = express()
app.use('/', handleHome);

export default app;