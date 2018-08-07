const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Info } = require('../models/info');

// => localhost:3000/infos/
router.get('/', (req, res) => {
    Info.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Information :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Info.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Information :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new Info({
        departmentNames: req.body.departmentNames,
        facultyNames: req.body.facultyNames,
        numberOfDepts: req.body.numberOfDepts,
        numberOfFacs: req.body.numberOfFacs,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Information Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        departmentNames: req.body.departmentNames,
        facultyNames: req.body.facultyNames,
        numberOfDepts: req.body.numberOfDepts,
        numberOfFacs: req.body.numberOfFacs,
    };
    Info.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Information Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Info.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Information Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
