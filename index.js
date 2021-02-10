/**
 * Module dependencies.
 */
var escapeHtml = require('escape-html')
var express = require('express')
var fs = require('fs')
var path = require('path')

var app = (module.exports = express())

// register .md as an engine in express view system
app.use('/static', express.static(path.join(__dirname, 'static')))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// make it the default so we dont need .md

app.get('/', function (req, res) {
  res.render('index', { title: 'Pug Example' })
})

app.get('/fail', function (req, res) {
  res.render('missing', { title: 'Pug Example' })
})

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000)
  console.log('Express started on port 3000')
}
