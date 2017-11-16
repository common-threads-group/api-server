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

    
    getOne() {
        return (req, res) => {
            Eductation.findOne({_id: req.params.educationId}, {}, (err, education) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    es.json({
                        data: {
                            id: education._id,
                            type: 'Education',
                            attributes: education
                        }
                    });
                }
            })
        };
    }

    delete() {
        return (req, res) => {
            Eductation.remove({_id: req.params.educationId}, (err) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json({
                        data: {
                            id: 1,
                            type: 'Message',
                            attributes: {
                                message: "Education Document was deleted. {_id: " + req.params.educationId + "}"
                            }
                        }
                    });
                }
            });
        };
    }

    update() {
        return (req, res) => {
            const requestEducation = req.body.data.attributes;
            Education.findOne({_id: req.params.educationId}, {}, (err, education) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    let updatedEducation = {
                        icon: requestEducation.icon || education.icon,
                        title: requestEducation.title || education.title,
                        schoolName: requestEducation.schoolName || education.schoolName,
                        city: requestEducation.city || education.city,
                        state: requestEducation.state || education.state,
                        startDate: requestEducation.startDate || education.startDate,
                        endDate: requestEducation.endDate || education.endDate,
                        about: requestEducation.about || education.about
                    };
                    Education.findOneAndReplace({_id: education._id}, updatedEducation, {}, (err, callbackEducation) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.json({
                                id: callbackEducation._id,
                                type: 'Education',
                                attributes: callbackEducation 
                            });
                        }
                    });
                }
            });
        };
    }

    getByProfile() {
        return (req, res) => {
            Eductation.find({profileId: req.params.profileId}, {}, (err, education) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json({
                        data: education.map((i) => {
                            return {
                                id: i._id,
                                type: 'Education',
                                attributes: i
                            };
                        })
                    });
                }
            });
        };
    }
}

blueprint.controller(EducationController);

module.exports = exports = EducationController;
