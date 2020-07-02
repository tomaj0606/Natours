import api from '@/api/tours';

const getAllTours = context => new Promise (((resolve, reject) => {
    const apiLevel = 'v1';
    console.log('lefut');
    api.getAllTours(apiLevel).then((res) => {
        console.log(res.message);
        resolve(res);
    }).catch((error) => {
        reject(error);
    })

}));


export default { getAllTours };