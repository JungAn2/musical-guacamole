<template>
  <div class="row items-center" color="dark">
    <div class="col"/>
    <q-card class="col" bordered>
      <q-form>
        <div class="col">
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
      email: ref(""),
      username: ref(""),
      password: ref(""),
    };
  },
};
</script>