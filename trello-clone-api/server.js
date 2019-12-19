var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    mongoose = require('mongoose'),
    Board = require('./models/board'),
    List = require('./models/list'),
    Card = require('./models/card'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/trellodb')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

var routes = require('./routes/boardRoutes')
var listRoutes = require('./routes/listRoutes')
var cardsRoutes = require('./routes/cardRoutes')
routes(app)
listRoutes(app)
cardsRoutes(app)

app.listen(port)
console.log(`API TRELLO CLONE STARTED ON ${port}`)