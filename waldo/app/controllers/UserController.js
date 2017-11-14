let blueprint = require('@onehilltech/blueprint');
let mongodb = require('@onehilltech/blueprint-mongodb')
let util = require('util');
let User = require('../models/User');
let Profile = require('../models/Profile');
let Education = require('../models/Education');
let Experience = require('../models/Experience');
let Occupation = require('../models/Occupation');
let Skill = require('../models/Skill');

UserController = function() {
    blueprint.BaseController.call(this);
}

blueprint.controller(UserController);

/**
 * This function returns a user given an accountId.
*/
UserController.prototype.get = () => {
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
 * Returns a JSON containing user information. 
*/
UserController.prototype.create = () => {
    return (req, res) => {
        const profileId = mongodb.Types.ObjectId();
        User.create({
            firstName: req.body.data.firstName,
            lastName:  req.body.data.lastName,
            city: req.body.data.city,
            state: req.body.data.state,
            radius: req.body.data.radius,
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


module.exports = exports = UserController;