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
router.post('/result', (req, res) => {
    res.end('n/a')

})
module.exports = router;