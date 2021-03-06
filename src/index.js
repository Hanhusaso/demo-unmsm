const express = require('express');
const app = express();
const path = require('path');
// const fetch = require('node-fetch');

const indexRoute = require('./routes/');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(indexRoute);

// staticfiles
app.use(express.static(path.join(__dirname, 'public')));

// API fetch
// fetch("https://node-noticias-2020.herokuapp.com/inventario/api/v1/noticia")
// .then(res => res.json())
// .then(data => console.log(data))

// listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

