var express = require('express')

var app = express()

app.use('/',express.static('./'))

let server = app.listen(3010,()=>{
    console.log('The server is listening on port :',3010)
})