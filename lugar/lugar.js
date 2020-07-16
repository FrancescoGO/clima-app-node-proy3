
const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=8de3f4e11687f18c458f0247c5e76ccf`
    });

    const resp = await instance.get();

    if( resp.data.cod !== 200 ) {
        throw new Error(`No hay resultados para ${ direccion }`)
    }

    const {lon:lng, lat} = resp.data.coord;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}

