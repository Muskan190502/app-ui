var express = require("express");
var apiMocker = require("connect-api-mocker");
var app = express();
app.use(apiMocker('/mocks'));
app.listen(8080, ()=> console.log("listening on http://localhost:8080"));