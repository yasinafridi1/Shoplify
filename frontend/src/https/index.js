import axios from "axios";


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
    }
})


export const loginUser = (data) => api.post('/api/login', data);
export const createUser = (data) => api.post('/api/register', data);