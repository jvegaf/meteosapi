const Maestro = require('./Maestro'); 
const Meteosapi = require('./Meteosapi');
const jsonfile = require('jsonfile');
const file = './tmp/data.json';
require('dotenv').load();

function getMunicipios() {
	let key = process.env.METEOSAPI_KEY; 
    let maestro = Maestro(key);
    console.log(__dirname);
    maestro.getMunicipios()
        .then(response => {
            jsonfile.writeFile(file, response, { spaces: 2, EOL: '\r\n' }, function (err) {
                if (err) console.error(err)
              });
        });
}

function getForecast(id) {
	let key = process.env.METEOSAPI_KEY; 
    let meteosapi = Meteosapi(key);
    meteosapi.getForecast(id)
        .then(data => {
            console.log(data);
        })
}

getForecast(28065);
// getMunicipios();