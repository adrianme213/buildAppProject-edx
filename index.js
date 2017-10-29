var express = require('express');

var app = express();

var port = 3000;

app.get('/', function(request, response) {
    response.send('Hello! Welcome to my homepage bruhhh!')
});

app.get('/about', function(request, response) {
   response.send(adrianAbout) 
});

app.get('/history', function(request, response) {
   response.send(adrianHistory) 
});

app.get('/funfacts', function(request, response) {
   response.send(adrianFunFacts) 
});

var adrianAbout = 'My name is Adrian Meza and I am a proud first-generation college graduate pursuing a career in software engineering. My technical background is in aerospace engineering, compounded with a mechanical engineering internship, high school teaching experience, and personal advancement in countless side projects.';

var adrianHistory = 'Adrian Meza is  from El Monte, California. Born in 1991, Adrian lived the following 15 years in this suburb outside of Los Angeles, known for its inner-city vibes emanating Los Angeles cultures. In 2006, Adrian\'s family moved to Arlington, Texas. Adrian did not like Texas. Adrian, still, does not like Texas. A historical tangent there that will be discussed another time. Post high school, Adrian studied at the University of Southern California and graduated as an aerospace engineer with a minor in psychology. Adrian taught inner-city high school in south Los Angeles, creating and delivering curriculum for a handful of classes (AP Physics, AP Statistics, Computer Science, Algebra 2 Support, Engineering)';

var adrianFunFacts = '1) Stabbed myself against a fence once\n2) Shot a shotgun few times in my life\n3) My first job was a dishwasher at a restaurant\n4) I played two varsity sports in high school: baseball and basketball\n\nThanks for reading!';


app.listen(port, function() {
    console.log('Express app listening on port: ', port);
})
