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
 * This class handles the POST request to login.
*/


/**
 * Registers the controller with Blueprint.
*/
LoginController = function() {
    blueprint.BaseController.call(this);
}

blueprint.controller(LoginController);

/**
 * This function returns the callback that handles login.
*/
LoginController.prototype.login = () => {
    return (req, res) => {
        User.findOne({'email': req.body.data.email}, {}, (err, user) => {
            if (err) {
                res.status(500).send(err);
            }
            if(user == null) {
                res.status(404).send("User with that email Not Found");
            } else if(user.password === req.body.data.password) {
                //Correct Email and Password
                Profile.findOne({_id: user.profileId}, {},(err, profile) => {
                    if (err) {
                        res.status(500).send(err);
                    }

                    Education.find({_id: profile.educationId}, {}, (err, education) => {
                        if (err) {
                            res.status(500).send(err);
                        }

                        Experience.find({_id: profile.expirienceId}, {}, (err, expirience) => {
                            if (err) {
                                res.status(500).send(err);
                            }

                            Occupation.find({_id: profile.occupationId}, {}, (err, occupation) => {
                                if (err) {
                                    res.status(500).send(err);
                                }

                                Skill.find({_id: profile.skillId}, {}, (err, skill) => {
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

            } else {
                res.status(401).send("Incorrect Password");
            }
        });
    }
}

module.exports = exports = LoginController;
