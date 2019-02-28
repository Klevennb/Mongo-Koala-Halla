const express = require('express');
const router = express.Router();

// Schema goes here
const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/koalaholla';
mongoose.connect(databaseUrl, {useNewUrlParser: true});

mongoose.connection.on('error', (error) => {
    console.log('mongoose connection error', error);
});

mongoose.connection.once('connected', () => {
    console.log('connected to mongo!!');
});

// Mongoose schema
const Schema = mongoose.Schema;
const koalaSchema = new Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    ready_to_transfer: {type: Boolean, required: true},
    notes: {type: String, required: true}
}); 

const Koala = mongoose.model('Koala', koalaSchema);
// GET Route
router.get('/', (req, res) => {
    // REPLACE THIS with mongoose find
    Koalas.find({}).then((results) => {
        console.log('results: ', results);
        res.send(results);
    }).catch((error) => {
        console.log('error in finding Koalas: ', error);
        res.sendStatus(500);
    });
});

// POST route
router.post('/', (req, res) => {
    const koalaToAdd = req.body;
    Koala.create(koalaToAdd).then(createdKoala => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('erro in making POST', error);
        res.sendStatus(500);
    });
}); // end of POST

// PUT route
// DELETE route


module.exports = router;
