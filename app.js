const express = require('express');
const app = express();
const vision = require('@google-cloud/vision');
// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: 'API-key.json'
});

let textDetected = [];
let total = 0;

// Performs label detection on the image file
client
  .textDetection('./receipt1.jpeg')
  .then(results => {
    const detections = results[0].textAnnotations.slice(1);
    detections.forEach(function(text) {
        if (!isNaN(parseInt(text.description))) {
            total = text.description; // gets the last number on receipt
        }
    });
    console.log('$' + total);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
