const cors = require('cors')

const corsOptions = {
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    origin: "*"
  };

module.exports = exports = {
    '/user/:accountId' : {
        use: cors(corsOptions),
        post : { action : 'UserController@create' },
        get : { action : 'UserController@get' }
    }
}