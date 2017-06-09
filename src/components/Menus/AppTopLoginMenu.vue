<template>
  <div v-if="userName === false">
    <router-link to="/login">Sign In</router-link>
    <span> | </span>
    <router-link to="/register">Sign Up</router-link>
  </div>
  <div v-else>
    <span>{{ userName }} | <router-link to="/logout">Log out</router-link></span>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'top-login-menu',
    computed: mapGetters({
      userName: 'checkUser'
    })
  }
</script>
<style>

</style>
