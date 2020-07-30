const express = require('express');
const router = express.Router();
const mysql = require('mysql');

var pool = mysql.createPool({
    host: 'prueba-unmsm.crj3yvrhuxhz.sa-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'oaci12345',
    database: 'prueba',
});

router.get('/', (req,res) => {
    res.render('index.html', {
        title: 'UNMSM home demo',
        name: 'home'
    });
});

router.get('/prueba', (req,res) => {
    res.render('prueba.html', {
        title: 'UNMSM prueba demo',
        name: 'prueba'
    });
});

// test query
router.get('/query', (req,res) => {
    
    pool.getConnection(function(err, connection){
        if (err) {
            console.log('ERROR');
        } else {
            console.log('CONNECTED');
        }
        connection.query('SELECT * FROM prueba', function(error, rows, fields){
            connection.release();
            if (error) {
                console.log('ERROR EN EL QUERY');
            } else {
                console.log('QUERY EXITOSO');
                console.log(rows);
            }
        })
    })
    
    res.render('query.html', { title: 'UNMSM query demo' });
});

module.exports = router;