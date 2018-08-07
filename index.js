const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var departmentController = require('./controllers/departmentController.js');
var facultyController = require('./controllers/facultyController.js');

var app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Server started at port...'));

app.use('/departments', departmentController);
app.use('/faculties', facultyController);
