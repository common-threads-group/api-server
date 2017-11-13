'use strict';

const mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

var schema = mongodb.Schema({
  // location : {
  //   longitude: {type: Number},
  //   latitude: {type: Number}
  // },
  skills: {type: String},
  about: {type: String},
  education: {type: String},
  birthdate: {type: Date},
  isNull: {type: Boolean},
  _id: {type: String}
});

const COLLECTION_NAME = 'profiles';
const MODEL_NAME = 'profile';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);