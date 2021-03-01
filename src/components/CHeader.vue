<template>
  <div class="header-page">
    <i class="iconfont iconfanhui-copy-copy" @click="back()"></i>
    <p>头部标题</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang='less' scoped>
.header-page {
  height: 50px;
  display: flex;
  justify-content: center;
  background: #C2C2C2;
  line-height: 50px;
  position: relative;
  .iconfont {
    position: absolute;
    left: 10px;
    cursor: pointer;
  }
  .iconfont:hover {
    color: red;
  }
}
</style>
