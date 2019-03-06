const axios = require('axios');


const getWeather = async(lat, lng) => {

    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=4914c3f73fd8868b03f1cc2fa7d67ccc`)

    return res.data.main.temp
    
}
 

module.exports = {
    getWeather
}