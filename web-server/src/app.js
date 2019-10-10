const path = require('path')
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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


// setting up api's
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address.'
        })
    }
    geocode(req.query.address, (err, geoRes={}) => {
        if (err) {
            return res.send({
                error: err
            })
        } forecast(geoRes, (err, weather) => {
            if (err) {
                return res.send({
                    error: err
                })
            }
            res.send({
                report: weather
            })
        })
    });
})

// rendering client-side
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        description: 'Forecast weather'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        description: 'This is a simple application intended to provide weather forecast for a desired region.'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Assistance',
        description: 'Enter the location you want to forecast the weather for and click Search.'
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
