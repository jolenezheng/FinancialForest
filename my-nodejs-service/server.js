const express = require('express');
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index.html", {
      title: "Financial Forest"
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
