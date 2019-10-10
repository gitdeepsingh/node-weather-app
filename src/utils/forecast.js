const request = require('request');

const token = '765ddcafd93200cabfecb72c20a7fcd1';

const forecast = (data, cb) => {
    const { latitude, longitude, location } = data;
    const url = `https://api.darksky.net/forecast/${token}/${latitude},${longitude}?units=si`;
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            cb('Unable to connect to the weather service. Please try later.', undefined)
        } else if (res.body.error) {
            cb('Location not found!', undefined)
        } else {
            cb(undefined, {
                location,
                forecast: res.body.daily.summary,
                minTempOfTheDay: res.body.daily.data[0].temperatureMin,
                maxTempOfTheDay: res.body.daily.data[0].temperatureMax,
                temperatureNow: res.body.currently.temperature,
            })
        }
    });
}

module.exports = forecast;
