<template>
  <div>
    <div v-if="username === false">
      <router-link to="/login">Sign In</router-link>
      <span> | </span>
      <router-link to="/register">Sign Up</router-link>
    </div>
    <div v-else>
      <span>{{ username }} | <router-link to="/logout">Log out</router-link></span>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'app-top-login-menu',
    computed: {
      ...mapGetters({
        username: 'checkUser'
      })
    }
  }
</script>
