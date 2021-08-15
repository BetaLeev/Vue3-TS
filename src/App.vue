<template>
  <div id="nav" class="nav">
    <div class="slide-nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About </router-link>
      <router-link to="/example">Example</router-link>
      <router-link to="/keep-alive">Keep Alive</router-link>
      <router-link to="/str-api">Strapi</router-link>
      <router-link to="/header-search">Header Search</router-link>
      <router-link to="/object">object </router-link>
      <router-link to="/proxy">proxy </router-link>
      <router-link to="/promise">promise </router-link>
      <router-link to="/design-partten">Design Partten </router-link>
      <router-link to="/type-script">typescript</router-link>
    </div>

    <div class="nav-main">
      <div class="nav header-menu">
        <router-link to="/call">实现 call、apply和bind</router-link>
        <router-link to="/flex">实现 flex 布局 </router-link>
        <router-link to="/grid">实现 grid 布局</router-link>
      </div>
      <keep-alive include="KeepAlive">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<style lang="less">
#nav {
  display: flex;
  height: calc(100vh - 30px);
  overflow-y: scroll;
  .nav-main {
    margin-left: 8px;
    flex: 1;
    border: 5px dotted burlywood;
    padding: 16px;
    max-height: 100vh;
    overflow-y: scroll;

    .header-menu {
      width: 100%;
      height: 60px;
      line-height: 60px;
      background-color: rgba(143, 231, 227, 0.87);
      a {
        margin: 0 16px;
      }
    }
  }
}
.slide-nav {
  width: 230px;
  background-color: aquamarine;
  a {
    display: block;
    padding: 20px;
  }
}
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
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #f5503a;
    }
  }
}
</style>
