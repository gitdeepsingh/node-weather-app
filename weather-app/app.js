const request = require('request');
const chalk = require('chalk');

const wToken = '765ddcafd93200cabfecb72c20a7fcd1';
const gToken = 'pk.eyJ1IjoiZGVlcHNpbmdoIiwiYSI6ImNrMWhrdjZqbzAzYm0zY2p6andwdHJiNG0ifQ.oFF0K-7GKc7VAYiJiECfSA';

const weatherUrl = `https://api.darksky.net/forecast/${wToken}/12.9716,77.5946?units=si`;
const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Bangalore.json?access_token=${gToken}&limt=1`;

request({ url: weatherUrl, json: true }, (err, res) => {
    if (err) {
        console.log(chalk.red('Unable to connect to the weather service. Please try later.'));

    } else if (res.body.error) {
        console.log(chalk.red('Location not found!'));

    } else {
        const data = res.body.currently.temperature;
        console.log(chalk.blue('temperature: '), data);
    }
});

request({ url: geoUrl, json: true }, (err, res) => {
     if (err) {
        console.log(chalk.red('Unable to connect to the geolocation service. Please try later.'));

    } else if (res.body.features.length === 0) {
        console.log(chalk.red('Unable to find this location! Try another'));

    } else {
    const long = res.body.features[0].center[0];
    const lat = res.body.features[0].center[1];
    console.log(chalk.green('longitude: '), long);
    console.log(chalk.green('latitude: '), lat);
    }
});

