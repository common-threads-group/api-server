module.exports = exports = {
    '/education/:profileId' : {
        post: {action : 'EducationController@add'}

    },
    '/education/:educationId' : {
        get: {action : 'EducationController@getSingle'},
        put: {action : 'EducationController@update'},
        delete: {action : 'EducationController@delete'}
    },
    '/profile/education/:profileId': {
        get: {action: 'EducationController@get'}
    }
}
