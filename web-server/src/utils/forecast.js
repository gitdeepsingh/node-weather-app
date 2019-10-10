const request = require('request');

const token = '765ddcafd93200cabfecb72c20a7fcd1';

const weather = (coordinates, cb) => {
    const { latitude, longitude } = coordinates;
    const url = `https://api.darksky.net/forecast/${token}/${latitude},${longitude}?units=si`;
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            cb('Unable to connect to the weather service. Please try later.', undefined)
        } else if (res.body.error) {
            cb('Location not found!', undefined)
        } else {
            cb(undefined, {
                temperature: res.body.currently.temperature
            })
        }
    });
}

module.exports = weather;
