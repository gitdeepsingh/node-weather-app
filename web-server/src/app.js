const path = require('path')
const express = require('express');
const hbs = require('hbs');

const app = express();

//define port
const port = 3000;

//path for express config
const publicPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath=path.join(__dirname, '../templates/partials')


//set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

//static directory to serve
app.use(express.static(publicPath));

app.get('/', (req, res)=>{
    res.render('index', {
        title: 'My Dashboard',
        description: 'I am a Software Developer'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Me',
        description: 'This is my porfolio.'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Need Help?',
        description: 'Please contact me at deepsinghh.js@gmail.com'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ', port)
})