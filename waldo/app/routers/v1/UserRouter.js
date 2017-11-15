const cors = require('cors')

module.exports = exports = {
    '/user/:accountId' : {
        use: cors(),
        post : { action : 'UserController@create' },
        get : { action : 'UserController@get' }
    }
}