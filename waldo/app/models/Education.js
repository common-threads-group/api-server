'use strict';

const mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

var schema = new mongodb.Schema({
  icon: {type: String},
  title: {type: String},
  schoolName: {type: String},
  location : {
      longitude: {type: Number},
      latitude: {type: Number}
  },
  startDate: {type: Date},
  endDate: {type: Date},
  about: {type: String},
  id: {type: ObjectId}
});

const COLLECTION_NAME = 'educations'
const MODEL_NAME = 'education';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);