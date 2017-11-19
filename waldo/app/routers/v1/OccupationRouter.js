module.exports = exports = {
    '/occupation/:profileId' :{
        post : { action : 'OccupationRouter@postProfileId' },
        get : { action : 'OccupationRouter@getProfileId' }
    },
    '/occupation/:occupationId':{
        put : { action : 'OccupationRouter@putOccupationId' },
        get : { action : 'OccupationRouter@getOccupationId' },
        delete : { action : 'OccupationRouter@deleteOccupationId' }
    }
    
}