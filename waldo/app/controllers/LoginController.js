let blueprint = require('@onehilltech/blueprint');
let util = require('util');
let User = require('../models/User');
let Profile = require('../models/Profile');

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
        User.findOne({'email': req.body.data.email}).then((err, user) => {
            if (err) {
                res.status(500).send(err);
            }
            if(user == null) {
                res.status(404).send("User with that email Not Found");
            }
            if(user.password === req.body.data.password) {
                //Correct Email and Password
                Profile.findOne({_id: user.profileId}).then((err, profile) => {
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
                                    skills: [],
                                    education: [],
                                    occupation: [],
                                    expirience: []
                                }
                            }
                        }
                    });
                });



            } else {
                res.status(401).send("Incorrect Password");
            }
        })
    }
}

module.exports = exports = LoginController;
