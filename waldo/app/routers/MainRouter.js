const blueprint = require('@onehilltech/blueprint');

module.exports = exports = {
  '/hello' : {
    get : { action : 'HelloController@hello'}
  },
  '/gatekeeper' : blueprint('router://@onehilltech/blueprint-gatekeeper:v1')
};
