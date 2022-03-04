<template>
  <router-view
    style="position: absolute; top: 0; left: 0; width: 100vw; height: 100vh"
  />
  <div class="row fixed-bottom z-max">
    <div class="col" />
    <div class="col-6">
      <div class="row justify-center">
        <div class="col float-right">
          <q-btn round class="q-ma-sm" to="">
            <q-tooltip>Project</q-tooltip>
          </q-btn>
        </div>
        <div class="col-1">
          <q-btn round size="lg" class="q-ma-sm q-mb-lg" to="/">
            <q-tooltip>Todo</q-tooltip>
          </q-btn>
        </div>
        <div class="col">
            <q-btn round class="col q-ma-sm" to="/register">
              <q-tooltip>Register</q-tooltip>
            </q-btn>
            <q-btn round class="col q-ma-sm">
              <q-tooltip>Login</q-tooltip>
            </q-btn>
            <q-btn round class="col q-ma-sm hidden">
              <q-tooltip>Logout</q-tooltip>
            </q-btn>
        </div>
      </div>
    </div>
    <div class="col" />
  </div>
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
