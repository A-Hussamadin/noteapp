const express = require('express')
const router = express.Router();
const _ = require('lodash');
const { ObjectID } = require('mongodb');

var { Note } = require('./../models/note');
var { authenticate } = require('./../middleware/authenticate');


router.post('/', authenticate, (req, res) => {
    var note = new Note({
        title: req.body.title,
        text: req.body.text,
        _creator: req.user._id
    });

    note.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/', authenticate, (req, res) => {
    Note.find({
        _creator: req.user._id
    }).then((notes) => {
        res.send(notes);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/:id', authenticate, (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Note.findOne({
        _id: id,
        _creator: req.user._id
    }).then((note) => {
        if (!note) {
            return res.status(404).send();
        }

        res.send(note);
    }).catch((e) => {
        res.status(400).send();
    });
});

router.delete('/:id', authenticate, (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Note.findOneAndRemove({
        _id: id,
        _creator: req.user._id
    }).then((note) => {
        if (!note) {
            return res.status(404).send();
        }

        res.send(note);
    }).catch((e) => {
        res.status(400).send();
    });
});

router.patch('/:id', authenticate, (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['title', 'text']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // if (_.isBoolean(body.completed) && body.completed) {
    //     body.completedAt = new Date().getTime();
    // } else {
    //     body.completed = false;
    //     body.completedAt = null;
    // }

    Note.findOneAndUpdate({ _id: id, _creator: req.user._id }, { $set: body }, { new: true }).then((note) => {
        if (!note) {
            return res.status(404).send();
        }

        res.send(note);
    }).catch((e) => {
        res.status(400).send();
    })
});


module.exports = router