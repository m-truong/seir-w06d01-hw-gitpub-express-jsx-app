const express = require('express')
const app = express()
// cap_case is true constant
const PORT = 3000;

// INDEX-Route that shows ALL resources
app.get('/', (req, res) => {
    res.send(`<h1 style="font-size: 30px; color: red;"> Welcome to the GitPub App</h1>`)
})

// SHOW-route that shows a single resource


// listen
app.listen(PORT, () => {
    console.log("listening...")
})