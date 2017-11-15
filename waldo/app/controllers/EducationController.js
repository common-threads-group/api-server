const blueprint = require('@onehilltech/blueprint');
const mongodb = require('@onehilltech/blueprint-mongodb');
const Eductation = require('../models/Education');


class EducationController {
    constructor() {
        blueprint.BaseController.call(this);
    }

    add() {
        return (req, res) => {
            const newEducation = req.body.data.attributes;
            Education.create({
                title: newEducation.title,
                schoolName: newEducation.schoolName,
                city: newEducation.city,
                state: newEducation.state,
                startDate: newEducation.startDate,
                endDate: newEducation.endDate,
                about: newEducation.about,
                profileId: req.params.profileId
            }, (err, education) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json({
                        data: {
                            id: education._id,
                            type: 'Education',
                            attributes: education
                        }
                    });
                }
            });
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
