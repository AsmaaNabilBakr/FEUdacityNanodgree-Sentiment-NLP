const dotenv = require('dotenv');
dotenv.config();

// var path = require('path')
const express = require('express')
const axios = require('axios');
// Start up an instance of app
const app = express()

// Cors allows the browser and server to communicate without any security interruptions
const cors = require('cors');

app.use(cors());
app.use(express.static('dist'))


const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
  console.log(`You entered: ${req}`);
  const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`

  const response = {
    rexr: 'hi'
  }
  console.log(response)
  res.send(response)
})

// POST Route
app.get('/analyzeURL/*', async (req, res) => {
    const url = req.params[0];
    const apiURL = `${baseURL}key=${apiKey}&url=${url}&lang=en`
    const response = await axios.get(apiURL);
    const {agreement, subjectivity, confidence, irony} = response.data
    res.send({agreement, subjectivity, confidence, irony});
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('Example app listening on port 8082!')
})