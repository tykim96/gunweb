const express = require('express')
const { handleHome } = require('./controller/homecontroller.js')
const app = express()
const port = 3000

app.get('/', handleHome);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})