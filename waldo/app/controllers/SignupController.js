let blueprint = require('@onehilltech/blueprint');
let mongodb = require('@onehilltech/blueprint-mongodb')
let util = require('util');
let User = require('../models/User');
let Profile = require('../models/Profile');


/**
 * Registers the controller with Blueprint.
*/
SignupController = function() {
    blueprint.BaseController.call (this);
}

blueprint.controller (SignupController);

/**
 * Returns a JSON containing signup information. 
*/
SignupController.prototype.signup = () => {
    return (req, res) => {
        const profileId = mongodb.Types.ObjectId();
        User.create({
            name: req.body.data.name,
            email: req.body.data.email,
            password: req.body.data.password,
            phoneNumber: req.body.data.phoneNumber,
            profileId: profileId,
            _id: mongodb.Types.ObjectId()
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
                        //token: new Token() ???,
                        id: user._id,
                        type: String
                    },
                    relationships: {
                        profile: {
                            profile: profile,
                            id: profileId,
                            type: "Profile"
                        }
                    }
                })
            })

        })
    }
}



module.exports = exports = SignupController;