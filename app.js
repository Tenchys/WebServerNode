const express = require('express');
const hbs = require('hbs');
require('dotenv').config();


const port = process.env.PORT;



const app = express();





app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
//Servir contenido estatico
app.use(express.static('public'));

app.get('/',(req,res) =>{
    res.render('home',{
        nombre: 'Sebatian Rodriguez',
        titulo: 'Curso Node'
    });
});

app.get('/generic',(req,res) =>{
    res.render('generic',{
        nombre: 'Sebatian Rodriguez',
        titulo: 'Curso Node'
    });
});

app.get('/elements',(req,res) =>{
    res.render('elements',{
        nombre: 'Sebatian Rodriguez',
        titulo: 'Curso Node'
    });
});

app.get('*',(req,res)=>{
    res.send('<h1> Pagina no disponible</h1>');
})


app.listen(port,() =>{
    console.log(`Corriendo en el port ${port}`);
});
