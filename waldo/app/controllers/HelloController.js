let blueprint = require('@onehilltech/blueprint');
let util = require('util');

function HelloController() {
    blueprint.BaseController.call(this);
}

blueprint.controller(HelloController);

HelloController.prototype.hello = () => {
    return (req, res) => {
        res.json({
            'greeting': "Hello World!"
        });
    }
}

module.exports = exports = HelloController;