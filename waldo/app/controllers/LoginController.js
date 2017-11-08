let blueprint = require('@onehilltech/blueprint');
let util = require('util');

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
        /**
         * This is where the code for verifing the login will go.
         */
        //TODO: Delete this
        res.json({
            data: {
                loggedIn: true,
                name: "John Doe",
                token: 42
            }
        });
    }
}

module.exports = exports = LoginController;
