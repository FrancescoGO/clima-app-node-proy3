
const axios = require('axios');

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
            .option({
                direccion: {
                    alias: 'd',
                    desc: 'Dirección de la cuidad para obtener el clima',
                    demand: true
                }
            })
            .help()
            .argv;

const getInfo = async (direccion) => {

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${direccion} es de ${temp}`

    } catch (err) {

        return new Error(`No se pudo determinar el clima de ${direccion}`, err.message);

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);