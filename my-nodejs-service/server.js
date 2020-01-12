const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser')

// const express = require('express');
// const app = express();
const vision = require('@google-cloud/vision');
var cors = require('cors');
// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: '../SERVICE-KEY.json'
});

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index.html", {
    title: "Financial Forest"
  });
});

let textDetected = [];
let total = 0;

// $('.pay-btn').click(function() {
//   console.log("!!!!!!!")
// })

app.use(cors());
app.get('/getData', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  let jsonObj = {
    "Actualtotal": 0
  }
  client
    .textDetection('./public/img/receipt3.jpeg')
    .then(results => {
      const detections = results[0].textAnnotations.slice(1);
      detections.forEach(function (text) {
        if (!isNaN(parseInt(text.description))) {
          total = text.description; // gets the last number on receipt
        }
      });
      jsonObj.Actualtotal = total;
      res.send(
        jsonObj
      )
    })
    .catch(err => {
      console.error('ERROR:', err);
    });



})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});