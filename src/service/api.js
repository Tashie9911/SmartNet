import axios from 'axios';


const API_URL = 'http://localhost:3002/users';

export const addcar = async (data) => {
    try {
     return await axios.post(API_URL,data);
    } catch (error) {
        console.log('Error while calling addcar api ', error.message);
    }
}

export const getuser = async () => {
    try {
          return await axios.get(API_URL);
    } catch (error) {
        console.log('Error while calling getusers api', error.message);
    }
}
