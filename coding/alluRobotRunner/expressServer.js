var express = require('express');
var app = express();

const spawn = require("child_process").spawn;
const robotLeft = function(){
      spawn('python',["py/robotLeft.py"]);
  }
const robotRight = function(){
    spawn('python',["py/robotRight.py"]);
}
const robotForward = function(){
    spawn('python',["py/robotForward.py"]);
}
const robotBackward = function(){
    spawn('python',["py/robotBackward.py"]);
}

app.get('/', function (req, res) {
   res.send('Available commands <br>/robotLeft<br>/robotRight<br>/robotForward<br>/robotBackward');
})

app.get('/robotLeft', function (req, res) {
    robotLeft('left');
    res.send('Robot moves left');
})

 app.get('/robotForward', function (req, res) {
    robotForward();
    res.send('Robot moves forward');
 })

 app.get('/robotBackward', function (req, res) {
    robotBackward();
    res.send('Robot moves backward');
 })

 app.get('/robotRight', function (req, res) {
    robotRight();
    res.send('Robot moves right');
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Robot controller app listening at http://%s:%s", host, port)
})