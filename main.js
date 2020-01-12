// const express = require('express');
// const app = express();
// const vision = require('@google-cloud/vision');
// var cors = require('cors');
// // Creates a client
// const client = new vision.ImageAnnotatorClient({
//   keyFilename: 'SERVICE-KEY.json'
// });

// let textDetected = [];
// let total = 0;

// app.use(cors());
// app.get('/getData', function (req, res) {

//   let jsonObj = {
//     "Actualtotal" : 0
//   }
//   client
//     .textDetection('./my-nodejs-service/public/img/receipt1.jpeg')
//     .then(results => {
//       const detections = results[0].textAnnotations.slice(1);
//       detections.forEach(function (text) {
//         if (!isNaN(parseInt(text.description))) {
//           total = text.description; // gets the last number on receipt
//         }
//       });
//       jsonObj.Actualtotal = total;
//       console.log('$' + total);
//     })
//     .catch(err => {
//       console.error('ERROR:', err);
//     });

//   res.json(
//     jsonObj
//   )
  
// })