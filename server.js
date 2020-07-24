const express = require('express');
const hbs = require('hbs');
const app = express();
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ) )
// Express HBS engine
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'guiLlerMo'
    });
});
app.get('/about', (req, res) => {

    res.render('about');
});
// ESCUCHAR LA RUTA /data
// app.get('/data', (req, res) => {
//     res.send('Hola Data');
// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el pureto ${port}`);
});