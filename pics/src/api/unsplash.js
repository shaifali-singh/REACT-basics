import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : 
        'Client-ID GBZFow7MHi3juJXGF2xi0J4lbjwAM7x7clw8v9KEtL4'
       //  Access key available on application page
    }
});