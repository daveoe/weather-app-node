const axios = require('axios');


const getPlaceLatLng = async(direction) => {

    // Function to transform it to URL friendly
    let encodedUrl = encodeURI(direction);

    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyAliO3z_J-ssPRIlEV2Y_ltD_7fxpV-hyE`)

    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No results for the city ${direction}`);
    }

    let location = res.data.results[0];
    let coors = location.geometry.location;

    return {
        direction: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}


module.exports = {
    getPlaceLatLng
}