<template>
  <div class="page-test">
    <c-header></c-header>
  </div>
</template>

<script>
import CHeader from '@/components/CHeader'
export default {
  metaInfo: {
    title: '测试页'
  },
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    CHeader
  }
}
</script>

<style lang='less' scoped>
.page-test {
  height: 100%;
  background: #F5F6F9;
}
</style>
