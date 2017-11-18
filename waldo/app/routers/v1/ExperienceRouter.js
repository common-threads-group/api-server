module.exports = exports ={
    '/v1/experience/:profileId' : {
        post: {action : 'ExperienceController@add'}
    },
    '/v1/experience/:experienceId' : {
        get: {action : 'ExperienceController@getOne'},
        put: {action : 'ExperienceController@update'},
        delete: {action : 'ExperienceController@delete'}
    },
    '/v1/profile/experience/:profileId' : {
        get: {action: 'ExperienceController@getByProfile'}
    }
}