<template>
  <b-col>
    <b-row>
      <h2>Login page</h2>
    </b-row>
    <b-row>
      <form>
        <div class="form-group">
          <label for="login">login or email</label>
          <input  class="form-control" type="text" v-model="user.login" id="login">
        </div>
        <div class="form-group">
          <label for="password">password</label>
          <input type="password" class="form-control" v-model="user.password" id="password">
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-outline-primary" @click="login(user.login, user.password)">Sign In</button>
        </div>
      </form>
    </b-row>
  </b-col>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import axios from 'axios'
  import Vue from 'vue'

  export default {
    name: 'login',
    data () {
      return {
        user: {
          login: '',
          password: ''
        }
      }
    },
    computed: mapGetters(['signInCheck']),
    methods: {
      ...mapActions({
        signIn: 'signIn'
      }),
      login (login, password) {
        axios.post(`http://127.0.0.1:8000/api/tokens`, {
          login: login,
          password: password
        })
        .then(response => {
          Vue.cookie.set('token', response.data.token, 1)
          console.log(response.data)
        })
        .catch(e => {
          this.$store.dispatch('addError', e.response.data)
        })
      }
    }
  }
</script>
<style scoped>
  label {
    width: 200px;
  }
  h2 {
    padding-bottom:30px;
    margin: 0 auto;
  }
  form {
    margin: 0 auto;
  }
</style>
