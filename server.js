const express = require('express')
const path = require('path')
const responseJson = './landing-page.json'

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build/')))

// For Json response
app.get('/home.json', (req,res) => {
    res.sendFile(path.join(__dirname + '/home.json'))
})


// Handles any requests that don't match the ones above
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

// Server on 5000 port
const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);