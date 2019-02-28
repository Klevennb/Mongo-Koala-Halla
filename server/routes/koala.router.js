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

const Koalas = mongoose.model('Koalas', koalaSchema);
// GET Route
router.get('/', (req, res) => {
    // REPLACE THIS with mongoose find
    res.send([
        {
            _id: ObjectId("58de9673d0c1cb22fbcb2655"),
            name: "Scotty",
            gender: "M",
            age: 4,
            ready_to_transfer: true,
            notes: "Born in Guatemala"
        }
    ])
});

// POST route


// PUT route
router.put('/', (req, res) => {
    const updateKoala = req.body;
    Koalas.findOneAndUpdate(updateKoala).then(response => {
        console.log(response);
        res.sendStatus(200);
    }).catch(error => {
        console.log('error ing making PUT', error);
        res.sendStatus(500)
    })
})// end of PUT 

// DELETE route


module.exports = router;
