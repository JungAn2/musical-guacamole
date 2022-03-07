import { ref } from 'vue'
import { defineStore } from 'pinia'

export const authStore = defineStore('user', ()=>{
    const user = ref({
        registerEmail: "",
        registerUsername: "",
        registerPassword: ""
    })

    const setRegisterEmail = (email:string)=>{
        user.value.registerEmail = email
    }

    const setRegisterUsername = (username:string)=>{
        user.value.registerUsername = username
    }

    const setRegisterPassword = (password:string)=>{
        user.value.registerPassword = password
    }

    return {
        user,
        setRegisterEmail,
        setRegisterUsername,
        setRegisterPassword
    }
})