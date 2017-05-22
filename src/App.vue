<template>
  <div id="app">
    <div is="app-header"></div>
    <router-view></router-view>
    <div is="app-footer"></div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
  name: 'app',
  components: {AppHeader, AppFooter}
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
