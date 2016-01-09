var express = require('express');
var path = require('path');
var app = express();
var fetch = require('isomorphic-fetch');

app.use(express.static(path.join(__dirname, './../')));

app.get('/', function(req,res) {
  res.sendFile('/index.html');
});
app.get('/palletes', function(req, res) {
  fetch('http://www.colourlovers.com/api/palettes?format=json')
    .then(data => data.json())
    .then(json => {
      return res.json(json)
    })
    .catch(res.send)
})

app.listen(process.env.PORT || 3000, function() {
  console.log('Server is lisening on port 3000');
});
