// Q. Create a middleware which is similar to morgan(logger) which logs

// requested method
// requested url
// current time

// Q. Create a middleware which is similar to express.json()

// parses json data and puts it into req.body

// Q. Create a middleware which functions similar to express.static()

let express = require('express')
let loggar = require('morgan')
let cookie = require('cookie-parser')

let app = express()

let date = new Date()
let hours = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
let currentTime = `${hours}:${minute}:${second}`
console.log(currentTime)

app.use((req, res) => {
  console.log(req.method, req.url, currentTime)
})

app.use((req, res) => { 
    res.json(req.body)
})
app.listen(4000, () => {
  console.log('server listing port 4000')
})
