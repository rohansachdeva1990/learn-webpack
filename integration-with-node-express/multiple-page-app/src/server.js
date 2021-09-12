const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/hello-world/', function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.get('/luffy/', function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/luffy.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.get('/archer/', function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/archer.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.listen(3000, function () {
  console.log('Application is running on http://localhost:3000/');
});
