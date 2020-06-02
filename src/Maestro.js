const rp = require('request-promise');
const BASE_URL = 'https://opendata.aemet.es/opendata/api/maestro/';


function Options(apiKey) {
	return options = {
		url: BASE_URL + 'municipios',
		headers: {
			api_key: apiKey,
			Accept: 'application/json',
		},
	}
}

function Maestro(apiKey) {
    return{
        getMunicipios: function() {
            let options = Options(apiKey);
            return rp(options);
        }
    }
}

module.exports = Maestro;