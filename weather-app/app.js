const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address=process.argv[2]
if(!address){
    console.log(chalk.red('Please provide a valid address.'))
} else {
    geocode(address, (err, res) => {
        if (err) {
            console.log(chalk.red('Error: ', err));
        }
        console.log('Geolocation Data: ', res);
        forecast(res, (err, data)=>{
            if(err){
            console.log(chalk.red('Error: ', err));
            }
            console.log('Weather Data: ', data)
        })
    });    
}

