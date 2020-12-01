const express = require('express')
const app = express()
// cap_case is true constant
const PORT = 3000;
// creates JSX view-engine
const viewEngine = require('express-react-views').createEngine

// requires the drinks-modal exports data! 
// stores the data
const drinks = require('./models/drinks.js')

// make server.js to work with JSX template files using JSX view-engine
app.set('view engine', 'jsx')
app.engine('jsx', viewEngine())

// INDEX-Route that shows ALL resources
app.get('/', (req, res) => {
    res.send(`<h1 style="font-size: 30px; color: red;"> Welcome to the GitPub App</h1>`)
})

// 
app.get('/drinks', (req, res) => {
    res.send(drinks); 
})
// SHOW-route that shows a single resource


// listen
app.listen(PORT, () => {
    console.log("listening...")
})