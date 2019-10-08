const request = require('request');
const token='765ddcafd93200cabfecb72c20a7fcd1'
const url = `https://api.darksky.net/forecast/${token}/12.9716,77.5946?units=si`;

request({ url: url, json: true }, (err, res) => {
    const data=res.body.currently;
    console.log(data);
});

