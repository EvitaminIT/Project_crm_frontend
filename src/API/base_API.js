import axios from "axios";

let baseURL = 'https://evitsbackend.pythonanywhere.com/'

const Base_API_Service = axios.create({
    baseURL: baseURL
})

export default Base_API_Service;