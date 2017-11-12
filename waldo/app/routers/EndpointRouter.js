'use strict';

const cors = require ('cors');
const gatekeeper = require('@onehilltech/blueprint-gatekeeper');

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
};

module.exports = {
  '/v1': {
    use: [
      cors (corsOptions),
    ],
    policy: 'gatekeeper.auth.bearer'
  }
};