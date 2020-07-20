var express = require('express');
var router = express.Router();
let request = require('request');
const config = require('../config');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'testing';
var db;
var collectionArticles;

// Use connect method to connect to the server
MongoClient.connect(url,{ useUnifiedTopology: true,
  useNewUrlParser: true}, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    db = client.db(dbName);
    collectionArticles = db.collection('test');
});


const APIkey = config.APIkey;
const baseUrl = config.baseUrl.path;

router.get('/', function (req, res) {
    let message = {
        note: "Run Below Path for getting Article Data once",
        path: "http://localhost:5000/downloadArticles"
    }
    res.json(message);
});
router.get('/articles', function(req, res, next) {
      collectionArticles.find().toArray(function(err, data){
        if(err) throw err;
        res.json(data);
      });
  });

/* GET home page. */
router.get('/downloadArticles', function (req, res) {
  var options = {
      method: 'GET',
      url: baseUrl + APIkey,
      qs: { q: 'article', appid: 'b6907d289e10d714a6e88b30761fae22' },
      headers:
      {
          'Bearer-token': '9cb0ce83-de22-efbf-1495-ac03538c570c',
          'cache-control': 'no-cache'
      }
  };
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
      let newBody = JSON.parse(body)
      collectionArticles.insertOne(newBody, function (err, data) {
          if (err) throw err
          else {
              res.json(newBody)
          }
      });
  });
});

module.exports = router;
