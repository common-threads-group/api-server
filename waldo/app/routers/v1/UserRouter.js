module.exports = exports = {
    '/user/:accountId' : {
        post : { action : 'UserController@create' },
        get : { action : 'UserController@get' }
    }
}