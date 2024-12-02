import axios from "axios";



const baseURL = 'http://127.0.0.1:8083/api/post'
const timeout = 15000
export const siteConfig = axios.create({
    baseURL: baseURL,
    timeout: timeout,
})


