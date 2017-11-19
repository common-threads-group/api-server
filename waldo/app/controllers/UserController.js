let blueprint = require('@onehilltech/blueprint');
let mongodb = require('@onehilltech/blueprint-mongodb')
let util = require('util');
let User = require('../models/User');
let Profile = require('../models/Profile');
let Education = require('../models/Education');
let Experience = require('../models/Experience');
let Occupation = require('../models/Occupation');
let Skill = require('../models/Skill');


/**
 * Handles requests for the User Collection.
 */
class UserController {
    constructor() {
        blueprint.BaseController.call(this);
    }

    /**
     * This function returns a user given an accountId.
    */
    get() {
        return (req, res) => {
            User.findOne({_id: req.params.accountId}, {}, (err, user) => {
                if (err) {
                    res.status(500).send(err);
                }

                Profile.findOne({_id: user.profileId}, {},(err, profile) => {
                    if (err) {
                        res.status(500).send(err);
                    }

                    Education.find({profileId: profile._id}, {}, (err, education) => {
                        if (err) {
                            res.status(500).send(err);
                        }

                        Experience.find({profileId: profile._id}, {}, (err, expirience) => {
                            if (err) {
                                res.status(500).send(err);
                            }

                            Occupation.find({profileId: profile._id}, {}, (err, occupation) => {
                                if (err) {
                                    res.status(500).send(err);
                                }

                                Skill.find({profileId: profile._id}, {}, (err, skill) => {
                                    if (err) {
                                        res.status(500).send(err);
                                    }

                                    res.json({
                                        data: {
                                            id: user._id,
                                            type: 'User',
                                            attributes: user
                                        },
                                        relationships: {
                                            profile: {
                                                data: {
                                                    id: profile._id,
                                                    type: 'Profile',
                                                    attributes: profile
                                                },
                                                relationships: {
                                                    skills: skill,
                                                    education: education,
                                                    occupation: occupation,
                                                    expirience: expirience
                                                }
                                            }
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }
    }


    /**
     * Creates a new user Given an AccountId.
     * Returns a JSON containing user information. 
    */
    create() {
        return (req, res) => {
            
            const userData = {
                firstName: req.body.data.attributes.firstName,
                lastName:  req.body.data.attributes.lastName,
                city: req.body.data.attributes.city,
                state: req.body.data.attributes.state,
                radius: req.body.data.attributes.radius
            };
            const profileId = mongodb.Types.ObjectId();
            
            User.create({
                firstName: userData.firstName,
                lastName:  userData.lastName,
                city: userData.city,
                state: userData.state,
                radius: userData.radius,
                profileId: profileId,
                _id: req.params.accountId
            }).then((user, err) => {
                if (err) {
                    res.status(500).send(err);
                }
                Profile.create({
                    _id: profileId,
                    isNull: true
                }).then((profile, err) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    res.json({
                        data: {
                            id: user._id,
                            type: String
                        },
                        relationships: {
                            profile: {
                                attributes: profile,
                                id: profileId,
                                type: "Profile"
                            }
                        }
                    })
                })

            })
        }
    }
}
    

blueprint.controller(UserController);


module.exports = exports = UserController;