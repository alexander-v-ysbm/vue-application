<template>
  <div>
    <div v-if="showError" class="row show-error">
      <p>{{ showError }}</p>
    </div>
    <h2>Login page</h2>
    <label for="login">Login</label>
    <input type="text" v-model="user.login" id="login">
    <br>
    <label for="password">Password</label>
    <input type="password" v-model="user.password" id="password">
    <br>
    <button @click="login(user.login, user.password)">Sign In</button>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'login',
    data () {
      return {
        user: {
          login: '',
          password: ''
        },
        showError: 0
      }
    },
    computed: mapGetters(['signInCheck']),
    methods: {
      ...mapActions({
        signIn: 'signIn'
      }),
      login (login, password) {
        var user = {
          'login': login,
          'password': password
        }
        this.signIn(user)
        if (this.signInCheck) {
          this.$cookie.set('user', 'Username', 7)
          this.$router.push('/')
        } else {
          this.showError = 'log in failed'
        }
      }
    }
  }
</script>
