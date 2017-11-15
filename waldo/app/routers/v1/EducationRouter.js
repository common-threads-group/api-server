module.exports = exports = {
    '/education/:profileId' : {
        post: {action : 'EducationController@add'},
        get: {action : 'EducationController@getSingle'},
        delete: {action : 'EducationController@delete'}

    },
    '/education/:educationId' : {
        put: {action : 'EducationController@update'}
    },
    '/profile/education/:profileId': {
        get: {action: 'EducationController@get'}
    }
}
