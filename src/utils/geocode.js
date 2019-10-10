const request = require('request');
const chalk = require('chalk');

const token = 'pk.eyJ1IjoiZGVlcHNpbmdoIiwiYSI6ImNrMWhrdjZqbzAzYm0zY2p6andwdHJiNG0ifQ.oFF0K-7GKc7VAYiJiECfSA';

const geocode = (address, cb) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}&limt=1`;
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            cb('Unable to connect to the service', undefined);
        } else if (res.body.features.length === 0) {
            cb('Unable to find this location! Try another search.', undefined);
        } else {
            const data=res.body.features[0];
            cb(undefined, {
                longitude: data.center[0],
                latitude: data.center[1],
                location: data.place_name,
            })
        }
    });
}

module.exports = geocode;
