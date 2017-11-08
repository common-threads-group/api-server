'use strict';

const mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

var schema = new mongodb.Schema({
  name: {type: String},
  email: {type: String},
  password: {type: String},
  phoneNumber: {type: String},
  profileId: {type: Number},
  _id: {type: Number, required: true}
});

const COLLECTION_NAME = 'users';
const MODEL_NAME = 'user';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);
