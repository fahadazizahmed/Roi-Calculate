var ex = require('express');
var app = ex();
var roicalculate = require('./Controllers/roiCalculate');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(roicalculate);

app.listen(200);
console.log("Serer running on port 200")
