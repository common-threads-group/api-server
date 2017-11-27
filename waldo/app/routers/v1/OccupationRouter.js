module.exports = exports = {
    '/occupation/:profileId' : {
        post: {action : 'OccupationController@add'}

    },
    '/occupation/:occupationId' : {
        get: {action : 'OccupationController@getOne'},
        put: {action : 'OccupationController@update'},
        delete: {action : 'OccupationController@delete'}
    },
    '/profile/occupation/:profileId': {
        get: {action: 'OccupationController@getByProfile'}
    }
}
