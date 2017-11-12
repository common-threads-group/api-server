'use strict';

const mongodb = require ('@onehilltech/blueprint-mongodb')
  ;

var schema = new mongodb.Schema({
  name: {type: String},
  id: {type: ObjectId}
});

const COLLECTION_NAME = 'occupations';
const MODEL_NAME = 'occupation';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);