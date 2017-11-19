let blueprint = require('@onehilltech/blueprint');
let util = require('util');
let Occupation = require('../models/Occupation');

OccupationController = function() {
    blueprint.BaseController.call(this);
}

blueprint.controller(OccupationController);

OccupationController.prototype.get = () => {
    
    
    
}

module.exports = exports = OccupationController;