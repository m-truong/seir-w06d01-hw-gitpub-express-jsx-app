const express = require('express')
const app = express()
// cap_case is true constant
const PORT = 3000;
// creates JSX view-engine
const viewEngine = require('express-react-views').createEngine

// requires the drinks-model exports data
// stores the data
const drinks = require('./models/drinks.js')

// make server.js to work with JSX template files using JSX view-engine
app.set('view engine', 'jsx')
app.engine('jsx', viewEngine())

// INDEX-Route that shows ALL resources
app.get('/', (req, res) => {
    res.send(`<h1 style="font-size: 30px; color: red;"> Welcome to the GitPub App</h1>`)
    
})


// SHOW-route that shows a single resource
app.get('/drinks', (req, res) => {

    // res.send(drinks);

    // change INDEX-route to render dynamically
    res.render('Index', {
        drinks: drinks
    })
})


// listen
app.listen(PORT, () => {
    console.log("listening...")
})