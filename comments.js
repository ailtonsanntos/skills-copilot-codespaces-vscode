// Create web server
// To run this file you need to install express.js
// npm install express
// npm install body-parser
// npm install nodemon
// nodemon comments.js

var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/comments', function (req, res) {
  fs.readFile('comments.json', 'utf8', function (err, data) {
    if (err) {
      res.send('[]');
    } else {
      res.send(data);
    }
  });
});

app.post('/comments', function (req, res) {
  fs.readFile('comments.json', 'utf8', function (err, data) {
    if (err) {
      res.send('[]');
    } else {
      var comments = JSON.parse(data);
      comments.push(req.body);
      fs.writeFile('comments.json', JSON.stringify(comments), function (err) {
        if (err) {
          res.send('[]');
        } else {
          res.send('Success');
        }
      });
    }
  });
});

app.listen(3000, function () {
  console.log('Server is running on port 3000!');
}); 
 Now, run the server using the following command. 
 nodemon comments.js 
 You will see the following output. 
 Server is running on port 3000! 
 Now, open the browser and type  http://localhost:3000/  in the address bar. You will see the following output. 
 Hello World! 
 Now, open the Postman and test the API. 
 Get Request 
 Send a  GET  request to the URL  http://localhost:3000/comments  with the following body. 
 You will see the following response. 
 [] 
 Post Request 
 Send a  POST  request to the URL  http://localhost:3000/comments  with the following body. 
 {
  "name": "John",
  "comment": "Hello World!"
} 
 You will see the following response. 
 Success 
 Now, send a  GET  request to the URL  http://localhost:3000/comments . You will see the following response. 
 [
    {
        "name": "John",
        "comment": "Hello World!"