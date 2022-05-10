const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    // res.render('index', {title:'First Website Ejs'});
    res.render('index.html', {title:'Firs NodeJS Web'});
});

router.get('/contact', (req,res) => {
    // res.render('index', {title:'First Website Ejs'});
    res.render('contact.html', {title:'Contact Page'});
});

 module.exports = router;