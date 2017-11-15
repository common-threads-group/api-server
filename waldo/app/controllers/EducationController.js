const blueprint = require('@onehilltech/blueprint');
const mongodb = require('@onehilltech/blueprint-mongodb');
const Eductation = require('../models/Education');


class EducationController {
    constructor() {
        blueprint.BaseController.call(this);
    }

    add() {
        return (req, res) => {
            
        };
    }

    getSingle() {
        return (req, res) => {
            
        };
    }

    delete() {
        return (req, res) => {
            
        };
    }

    update() {
        return (req, res) => {
            
        };
    }

    get() {
        return (req, res) => {
            
        };
    }


}

blueprint.controller(EducationController);

module.exports = exports = EducationController;
