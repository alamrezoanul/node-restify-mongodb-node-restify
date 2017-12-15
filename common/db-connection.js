/*jslint node: true */
'use strict';

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var config = require('./config');
var log = require('./log');

var uri = ''.concat('mongodb://', config.db.host, ':', config.db.port, '/', config.db.name);
var options = { useMongoClient: true, promiseLibrary: require('bluebird') };

const dbConnection = {
  uri: uri,
  options: options,
}
module.exports = dbConnection