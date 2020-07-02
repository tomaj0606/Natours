import {apiURL, fetchData} from './api_helper';

const getAllTours = (apiLevel) => new Promise(((resolve, reject) => {
    const endpointURL = `${apiURL}${apiLevel}/tours`;
    fetchData(endpointURL, 'get').then((result) => {
        resolve(result);
    }).catch((error) => {
        reject(error);
    })
}));

export default { getAllTours };