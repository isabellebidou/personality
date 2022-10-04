const express = require('express');
const router = express.Router();
const db = require ('../db/questions.js');
router.get('/data',(req,res) => {
    const str = db.getCollection('questions').data;
    res.send(str);
});

router.get('/results',(req,res) => {
    const str = db.getCollection('results').data;
    res.send(str);
});
router.get('/results/:item',(req,res) => {
    const id = parseInt((req.params.item).substring(1));
    console.log(id);
    const coll = db.getCollection('results');
    const results = coll.findOne({'id': id});
    res.send(results);
});

router.post('/result', (req, res) => {
    res.end('n/a')
});


module.exports = router;