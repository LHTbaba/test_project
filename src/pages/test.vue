<template>
  <div class="page-test">
    <c-header></c-header>
    <!-- <div id="particles"></div> -->
    <vue-particles></vue-particles>
    <div class="content">
      <city-map></city-map>
    </div>
  </div>
</template>

<script>
// import particlesJS from 'particles.js'
// import particlesConfig from '../components/particles/particles.json'
import CHeader from '@/components/CHeader'
import CityMap from '@/components/CityMap'
export default {
  metaInfo: {
    title: '测试页'
  },
  data () {
    return {
    }
  },
  mounted () {
    // console.log(particlesJS)
    // particlesJS.load('particles', particlesConfig, function () {
    //   console.log('callback - particles.js config loaded')
    // })
  },
  methods: {
  },
  components: {
    CHeader,
    CityMap
  }
}
</script>

<style lang='less' scoped>
.page-test {
  width: 100vw;
  height: 100vh;
  background: #888888;
  position: relative;
  overflow: hidden;
  // #particles{
  //   position: absolute;
  //   width: 100%;
  //   height: calc(100vh - 50px);
  //   background-repeat: no-repeat;
  //   background-color: red;
  //   background-size: cover;
  //   background-position: 50% 50%;
  // }
  .content {
    width: 100%;
    position: absolute;
    top: 50px;
    height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
