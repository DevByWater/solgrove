const path = require('path')
const express = require('express')
const logger = require('morgan')

const app = express()
const PORT = process.env.PORT || 3005

app.use(logger('combined'))
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.listen(PORT, function() {
    console.log(`App listening on ${PORT}`)
})