<template>
  <div class="row items-center" filled color="white">
    <div class="col" />
    <q-card class="col z-top" bordered>
      <q-form @keyup.enter="enterSubmit">
        <div class="col">
          <h4>Register</h4>
          <q-input v-model="email" type="email" class="q-ma-lg" label="Email" />
          <q-input
            v-model="username"
            type="text"
            class="q-ma-lg"
            label="Username"
          />
          <q-input
            v-model="password"
            type="password"
            class="q-ml-lg"
            label="Password"
          />
          <q-btn size="lg" class="q-ma-lg" @click="handleSubmit">Submit</q-btn>
        </div>
      </q-form>
    </q-card>
    <div class="col">
      <q-card>
        <div class="col">
          <h3>Check for error card</h3>
          <h4>email:{{ auth.user.registerEmail }}</h4>
          <h4>username:{{ auth.user.registerUsername }}</h4>
          <h4>password:{{ auth.user.registerPassword }}</h4>
        </div>
      </q-card>
    </div>
  </div>
</template>


<script setup>
import { authStore } from "../stores/authentication";
import { onMounted, ref } from "vue";
import { event } from "quasar";

/**
 * Reactive variable for input forms
 */
const email = ref("");
const username = ref("");
const password = ref("");

const auth = authStore();
const handleSubmit = () => {
  auth.setRegisterEmail(email.value);
  auth.setRegisterUsername(username.value);
  auth.setRegisterPassword(password.value);
};

const register = (commit)=>{
  
}


</script>