'use strict';

const mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

var schema = new mongodb.Schema({
  icon: {type: String},
  title: {type: String},
  companyName: {type: String},
  location : {
      longitude: {type: Number},
      latitude: {type: Number}
  },
  startDate: {type: Date},
  endDate: {type: Date},
  about: {type: String},
  id: {type: String}
});

const COLLECTION_NAME = 'experiences'
const MODEL_NAME = 'experience';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);