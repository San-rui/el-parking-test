import axios from 'axios';


const apiTrivia = axios.create({
    baseURL: 'https://opentdb.com/api.php?'
});

export { apiTrivia };