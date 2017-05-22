<template>
  <div class="app-header">
    <div class="app-top-logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="">
      </router-link>
    </div>
    <div class="app-top-menu" is="app-top-menu"></div>
  </div>
</template>

<script>
  import AppTopMenu from '@/components/Menus/AppTopMenu'
  export default {
    components: {AppTopMenu},
    data () {
      return {
        msg: 'App Header'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app-header {
    width:100%;
    background: #ffee66;
    border-bottom: 1px solid #b4b4b4;
    padding: 5px;
    height:60px;
  }
  .app-top-logo {
    width:20%;
    float:left;
  }
  .app-top-logo img {
    height:60px;
  }
  .app-top-menu {
    width:80%;
    float:right;
    padding: 0;
  }
</style>
