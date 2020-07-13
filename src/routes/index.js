const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index.html', { title: 'UNMSM Fake' });
});

router.get('/contact', (req,res) => {
    res.render('contact.html', { title: 'UNMSM Fake | Contact' });
});

module.exports = router;