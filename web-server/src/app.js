const path = require('path')
const express = require('express');

const app = express();
const port = 3000;
const publicPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicPath));

app.get('/', (req, res)=>{
    res.render('index', {
        title: 'My Dashboard',
        name: 'Deep S'
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
        title: 'Get Help',
        message: 'How may I help you?'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ', port)
})