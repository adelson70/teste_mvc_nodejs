import axios from "axios";

const host = process.env.REACT_APP_API_HOST
const port = process.env.REACT_APP_API_PORT

console.log(`http://${host}:${port}`)

const api = axios.create({
    baseURL: `http://${host}:${port}`,
    headers: {
        "Content-Type": "application/json"
    }
})

export default api;