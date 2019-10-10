const path = require('path')
const express = require('express');
const hbs = require('hbs');

const app = express();

//define port
const port = 3000;

//path for express config
const publicPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


//set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

//static directory to serve
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        description: 'Weather Report'
    })
})


app.get('/weather', (req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address.'
        })
    }
    res.send({
        forecast: 'It is raining',
        address: req.query.address
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        description: 'This is my porfolio.'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Need Help?',
        description: 'Please contact me at deepsinghh.js@gmail.com'
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        description: 'Help article not found!'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        description: 'Page not found :('
    })
})

app.listen(port, () => {
    console.log('Server is up on port ', port)
})