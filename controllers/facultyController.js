const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Faculty } = require('../models/faculty');

// => localhost:3000/faculties/
router.get('/', (req, res) => {
    Faculty.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Facultys :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Faculty.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Faculty :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new Faculty({
        name: req.body.name,
        departmentsName: req.body.departmentsName,
        location: req.body.location,
        numberOfStud: req.body.numberOfStud,
        numberOfTea: req.body.numberOfTea,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Faculty Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        name: req.body.name,
        departmentsName: req.body.departmnetsName,
        location: req.body.location,
        numberOfStud: req.body.numberOfStud,
        numberOfTea: req.body.numberOfTea,
    };
    Faculty.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Faculty Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Faculty.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Faculty Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
