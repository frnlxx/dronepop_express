const express  = require('express');

const app = express();

const port = 1337;

const dir= __dirname + '/public/';


app.use(express.static('public'));
app.use(express.static('public/images'));
app.use(express.static('public/css'));
app.use(express.static('public/js'));



app.get('/', function(request, response){
	response.sendFile(dir+ 'index.html');

});

 app.get('/index', function(request, response){
	response.sendFile(dir+ 'index.html');

});

 app.get('/contact', function(request, response){
	response.sendFile(dir+ 'contact.html');

});

 app.get('/pinkflicker', function(request, response){
	response.sendFile(dir+ 'pinkflicker.html');

});
 app.get('/queenplay', function(request, response){
	response.sendFile(dir+ 'queenplay.html');

});
 app.get('/releases', function(request, response){
	response.sendFile(dir+ 'releases.html');

});

  app.get('/*', function(request, response){
	response.sendFile(dir+ '404.html');

});

app.listen(port, function(){
	console.log('Listening on http://localhost:'+port +"press ctrl + c to quit");

});
