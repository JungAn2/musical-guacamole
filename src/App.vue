<template>
    <router-view
      style="position: absolute; top: 0; left: 0; width: 100vw; height: 100vh"
    />

    <div class="fixed-bottom justify-start relative-position">
      <q-btn flat rounded class="no-pointer-events" />
      <q-btn rounded color="dark" class="q-ma-md">
        <span class="material-icons"> description </span>
        <q-tooltip>Project</q-tooltip>
      </q-btn>
      <q-btn size="xl" round color="dark" class="q-ma-sm" to="/">
        <span class="material-icons"> home </span>
        <q-tooltip>Todo</q-tooltip>
      </q-btn>
      <q-btn size="md" rounded color="dark" class="q-ma-md" to="/register">
        <span class="material-icons"> fingerprint </span>
        <q-tooltip>Register</q-tooltip>
      </q-btn>
      <q-btn size="md" rounded color="dark" class="q-ma-md" to="/login">
        <span class="material-icons"> login </span>
        <q-tooltip>Login</q-tooltip>
      </q-btn>
    </div>

    <img src="/L.png" class="fixed-center no-pointer-events">
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
