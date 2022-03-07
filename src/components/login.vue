<template>
  <div class="row items-center" color="dark">
    <div class="col"/>
    <q-card class="col" bordered>
      <q-form>
        <div class="col">
          <h4>Login</h4>
          <q-input
            v-model="UserEmail"
            type="text"
            class="q-ma-lg"
            label="Username or Email"
          />
          <q-input
            v-model="password"
            type="password"
            class="q-ml-lg"
            label="Password"
          />
          <q-btn size="lg" class="q-ma-lg">Submit</q-btn>
        </div>
      </q-form>
    </q-card>
    <div class="col"/>
  </div>
</template>


<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      userEmail: ref(""),
      password: ref(""),
    };
  },
};
</script>