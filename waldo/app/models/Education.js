const mongodb = require ('@onehilltech/blueprint-mongodb');

var schema = new mongodb.Schema({
  icon: {type: String}, //This is a url to a file in S3
  title: {type: String},
  schoolName: {type: String},
  state: {type: String},
  city: {type: String},
  startDate: {type: Date},
  endDate: {type: Date},
  about: {type: String},
  _id: {type: String}
});

const COLLECTION_NAME = 'educations';
const MODEL_NAME = 'education';

module.exports = mongodb.resource (MODEL_NAME, schema, COLLECTION_NAME);