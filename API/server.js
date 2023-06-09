const express = require('express');
const app = express();
const Router = require('./router/Teacher.js');

app.use(Router);

app.listen(8080);