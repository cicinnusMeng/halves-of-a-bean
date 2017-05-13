<template>
  <div id="app">
    <header-bar title-align='right'></header-bar>
    <router-view></router-view>

  </div>
</template>

<script>
import headerBar from '@/components/base/header'
export default {
  name: 'app',
  components:{
    headerBar
  }
}
</script>
<style lang="scss">
@import './assets/css/reset.css';
@import './assets/css/base.scss';
#app {
  width:100%;
  box-sizing:border-box;
  padding-top:0.45rem;
  overflow:hidden;
}
</style>
