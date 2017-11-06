let blueprint = require('@onehilltech/blueprint');
let util = require('util');

HelloControler = () => {
    blueprint.apply(this)
}

blueprint.controller(HelloControler);

HelloControler.prototype.hello = () => {
    return (req, res) => {
        res.json({
            'greeting': "Hello World!"
        });
    }
}

module.exports = exports = HelloControler;