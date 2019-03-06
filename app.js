const argv = require('./config/yargs').argv;
const place = require('./place/place');
const weather = require('./weather/weather');


let getInfo = async(direction) => {

    try {

        let coors = await place.getPlaceLatLng(direction);
        let temp = await weather.getWeather(coors.lat, coors.lng);
    
        return `The weather in ${coors.direction} is ${temp}`;

    } catch(e) {

        return `Weather could not be determinate in ${direction}`;
    
    }

}

getInfo(argv.direction)
    .then(msj => console.log(msj))
    .catch(e => console.log(e)); 