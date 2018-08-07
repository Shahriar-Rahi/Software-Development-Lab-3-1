const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Department } = require('../models/department');

// => localhost:3000/departments/
router.get('/', (req, res) => {
    Department.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Departments :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Department.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Department :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var emp = new Department({
        name: req.body.name,
        facultyName: req.body.facultyName,
        location: req.body.location,
        numberOfStud: req.body.numberOfStud,
        numberOfTea: req.body.numberOfTea,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Department Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        name: req.body.name,
        facultyName: req.body.facultyName,
        location: req.body.location,
        numberOfStud: req.body.numberOfStud,
        numberOfTea: req.body.numberOfTea,
    };
    Department.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Department Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Department.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Department Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
