const axios = require('axios');

const apiURL = 'http://localhost:3000/api/';

function fetchData(endpoint, requestType, requestBody) {
    var config = { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Access-Control-Allow-Origin': '*' } };
    if(requestType === 'get'){
        return axios.get(endpoint, requestBody, config)
        .then(response => response)
        .catch( error => error);
    }
}

export { apiURL, fetchData};

// const test = () => {
//     config = { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive' } };
//     console.log(config);
    
//     console.log('lefut');
//     return axios.get(apiURL, config)
//     .then(res => {
//         return res;
//     })
//     .catch(error => {
//         return error;
//     });
// }

// test();