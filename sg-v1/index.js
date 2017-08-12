const path = require('path')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 3005

app.use(express.static(path.join(__dirname, 'client/build')))


app.listen(PORT, function() {
    console.log(`App listening on ${PORT}`)
})