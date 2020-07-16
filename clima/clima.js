const axios = require('axios');

const getClima = async (lat, lng) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8de3f4e11687f18c458f0247c5e76ccf&units=metric`
    });

    const resp = await instance.get();

    if( resp.data.cod !== 200 ) {
        throw new Error(`No hay resultados para lat: ${ lat } - lng: ${ lng }`)
    }

    return resp.data.main.temp;

}

module.exports = {
    getClima
}

