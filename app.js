var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var app = express();
console.log("hey")
app.use(express.static(__dirname + '/public'));

//Handlebars engine.
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//POST request body parse.
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//HTML engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('port', 6923);

// app.get('/',function(req,res){
//     res.type('text/plain');
//     res.send('Scooby Doo!');
//   });

// Load Homepage
app.get('/',function(req,res){
    res.render('home.handlebars');
  })

// Load Review Page
app.get('/reviews',function(req,res){
    res.render('reviews.handlebars');
  });

// Load Menu Page
app.get('/menu',function(req,res){
    res.render('menu.handlebars');
  });

// Load About Page
app.get('/about',function(req,res){
    res.render('about.handlebars');
  });


//Yelp Link Redirect
app.get("/yelp", (req, res) => {

    res.status(301).redirect("https://www.yelp.com")

})
  
  

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
  });
  
  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500 - Server Error');
  });
  
  app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
  });