import axios from 'axios';

const KEY = 'AIzaSyDBRUaw8mQ2PKJ19HZkIQSkouzEU2QlN8U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});