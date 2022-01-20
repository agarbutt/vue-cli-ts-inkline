<template>
  <div class="card -light">
    <div class="_background:primary">
      <div id="nav" class="_width:25%">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
