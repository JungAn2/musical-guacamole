import axios from "axios"
import store from './stores'

export default () => {
    return axios.create({
        baseURL: store.
    })
}