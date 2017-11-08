let blueprint = require('@onehilltech/blueprint');
let util = require('util');


/**
 * Registers the controller with Blueprint.
*/
SignupController() {
    blueprint.BaseController.call (this);
}

blueprint.controller (SignupController);

/**
 * Returns a JSON containing signup information. 
*/
SignupController.prototype.signup = () => {
    
    return 
    {
        data: {
            name: String,
            email: String,
            password: String,
            phoneNumber: String
        }
    }
}



module.exports = exports = SignupController;