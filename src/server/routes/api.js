var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');

var home = fs.readFileSync(path.join(__dirname, '../../../data', 'home.json'), ).toString()
var mock_exam = fs.readFileSync(path.join(__dirname, '../../../data', 'mock_exam.json'), ).toString()
var ep_shop = fs.readFileSync(path.join(__dirname, '../../../data', 'ep_shop.json'), ).toString()
var free_resources = fs.readFileSync(path.join(__dirname, '../../../data', 'free_resources.json'), ).toString()
var results = fs.readFileSync(path.join(__dirname, '../../../data', 'results.json'), ).toString()
var ep_tution = fs.readFileSync(path.join(__dirname, '../../../data', 'ep_tution.json'), ).toString()
var contact_us = fs.readFileSync(path.join(__dirname, '../../../data', 'contact_us.json'), ).toString()

/* Make Api Calls */

router.get('/ui', (req, res, next) => {
  res.send({
    "id":"1",
    home,
    mock_exam,
    ep_shop,
    free_resources,
    results,
    ep_shop,
    contact_us
  });
});

router.get('/home', function (req, res, next) {
  res.send(home);
});

router.get('/mock_exam', function (req, res, next) {
  res.send(mock_exam);
});

router.get('/ep_shop', function (req, res, next) {
  res.send(ep_shop);
});

router.get('/free_resources', function (req, res, next) {
  res.send(free_resources);
});

router.get('/results', function (req, res, next) {
  res.send(results);
});

router.get('/ep_tution', function (req, res, next) {
  res.send(ep_tution);
});

router.get('/contact_us', function (req, res, next) {
  res.send(contact_us);
});

module.exports = router;