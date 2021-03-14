<template lang="pug">
  #app
    router-view
</template>

<style lang="scss">
@media (min-width: 1904px) {
  .container {
    max-width: 100% !important;
  }
}

@media (min-width: 1264px) {
  .container {
    max-width: 100% !important;
  }
}

@media (min-width: 960px) {
  .container {
    max-width: 100% !important;
  }
}

body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.orange-button {
  background-color: #FF9B23;
  border: 0px;
  padding: 10px 15px;
  color: white;
  font-weight: bold;
}

.orange-button:hover {
  background-color: darken(#FF9B23, 40%);
  cursor: pointer;
}

.round-button {
  border-radius: 40px;
  font-size: 10px;
  height: 15px;
  padding: 0 15px;
}
</style>
