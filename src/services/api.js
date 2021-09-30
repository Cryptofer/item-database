import axios from 'axios'

const serverUrl = 'http://localhost:3001/'
const imageUrl = serverUrl + 'images/'

const API = axios.create({
    baseURL: serverUrl + 'v1/',
    timeout: 6000
})

const Box = axios.create({
    baseURL: serverUrl + 'v1/box/',
    timeout: 6000
})

const Item = axios.create({
    baseURL: serverUrl + 'v1/item/',
    timeout: 6000
})

export {
    API,
    Box,
    Item,
    imageUrl
}