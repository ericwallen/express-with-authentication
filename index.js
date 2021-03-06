const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors = require('cors')
const bodyParser = require('body-parser')
const expressRoutes = require('./routes/routes')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use('/', expressRoutes)

app.use(express.static('public/home'))
app.use('/dashboard', express.static('public/dashboard'))
app.listen(port)
