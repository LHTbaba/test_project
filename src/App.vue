<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    titleTemplate: (meta) => {
      return meta ? `${meta} - LHT的vue测试网站` : 'LHT的vue测试网站'
    }
  }
}
</script>

<style>
@import '../src/assets/iconfont/iconfont.css'
</style>

<style rel="stylesheet/" lang='less' scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    /deep/ p {
    margin: 0;
    padding: 0;
  }
}
</style>
