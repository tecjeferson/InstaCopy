import axios from 'axios'

const api = axios.create({
    baseURL: 'https://instacopy-backend.tecjeferson.now.sh:80'
})

export default api