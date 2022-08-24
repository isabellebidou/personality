const express = require('express');
const router = express.Router();
const db = require ('../db/questions.js');
router.get('/data',(req,res) => {

    const str = db.getCollection('questions').data;
    console.log('handler str');
    console.log(JSON.stringify(str));

   /* const str = [{
        "name":"isabelle",
        "lname": "bidou",
        "age": "25"
    }];*/

    res.send(JSON.stringify(str));
});
router.post('/result', (req, res) => {
    res.end('n/a')

})
module.exports = router;