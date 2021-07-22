<template>
  <div id="nav" class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About | </router-link>
    <router-link to="/example">Example|</router-link>
    <router-link to="/keep-alive">Keep Alive</router-link>
    <router-link to="/str-api">Strapi</router-link>
    <router-link to="/header-search">Header Search</router-link>
  </div>
  <div class="nav">
    <router-link to="/call">实现 call、apply和bind</router-link>
  </div>
  <keep-alive include="KeepAlive">
    <router-view></router-view>
  </keep-alive>
</template>

<style lang="less">
.nav {
  margin-bottom: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// 测试切回dev
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
