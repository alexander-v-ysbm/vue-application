<template>
  <b-container id="app">
    <b-row is="app-error"></b-row>
    <b-row is="app-header"></b-row>
    <b-row class="main">
      <router-view></router-view>
    </b-row>
    <b-row is="app-footer"></b-row>
  </b-container>
</template>

<script>
  import AppHeader from '@/components/AppHeader'
  import AppFooter from '@/components/AppFooter'
  import AppError from '@/components/Errors/AppError'

  export default {
    name: 'app',
    components: {AppHeader, AppFooter, AppError}
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
  .main {
    padding:30px;
    padding-bottom:50px;
  }
</style>
