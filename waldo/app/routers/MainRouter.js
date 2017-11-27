const blueprint = require('@onehilltech/blueprint');
const gatekeeper = require('@onehilltech/blueprint-gatekeeper');
const winston = require('winston');

let cors = require ('cors')


module.exports = exports = {
  '/gatekeeper' : [
    cors(),
    blueprint('router://@onehilltech/blueprint-gatekeeper:v1')
  ]
};
