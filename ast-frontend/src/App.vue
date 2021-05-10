<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/CodeHelper">Code Helper</router-link> |
      <router-link to="/About">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Open Sans, Helvetica, Lucida Sans Unicode, Lucida Grande, Arial,
    Verdana, sansSerif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a1a1a !important;
  height: 100%;
}

html,
body {
  min-height: 90% !important;
  height: calc(100% - 30px);
  background-color: #1a1a1a !important;
}

#nav {
  padding: 15px;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: #999;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h5 {
  font-family: inherit;
}
</style>
