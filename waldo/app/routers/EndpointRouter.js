'use strict';

const cors = require ('cors');
const gatekeeper = require('@onehilltech/blueprint-gatekeeper');

module.exports = {
  '/v1': {
    use: [
      cors (),
    ],
    policy: 'gatekeeper.auth.bearer'
  }
};