import vue from 'vue'
import { authStore} from './authentication'
import { defineStore } from 'pinia'

export default {
    strict: true,
    setup() {
        const auth = authStore
     
        return {
            auth,
        }
        
    }
}
