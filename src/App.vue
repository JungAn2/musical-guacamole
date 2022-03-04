<template>
  <q-layout view="hHh lpR lff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="row justify-between">
        <q-div class="col row justify-start">
          <q-btn color="secondary"
            ><span class="q-mr-md material-icons"> assignment </span
            >Projects</q-btn
          >
        </q-div>
        <q-toolbar-title class="col">
          <q-btn flat to="/">
          <q-avatar>
            <span class="material-icons"> schedule </span>
          </q-avatar>
          Todo App
          </q-btn>
        </q-toolbar-title>
        <q-div class="col row justify-end">
          <q-btn color="secondary" class="q-ma-xs" to="/register"
            ><span class="q-mr-md material-icons"> fingerprint </span>
            Register</q-btn
          >
          <q-btn color="secondary" class="q-ma-xs"
            ><span class="q-mr-md material-icons"> login </span>Login</q-btn
          >
          <q-btn color="secondary" class="q-ma-xs"
            ><span class="q-mr-md material-icons"> logout </span>Logout</q-btn
          >
        </q-div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
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
