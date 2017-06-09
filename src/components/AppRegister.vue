<template>
  <div v-if="registrationSuccess === 0">
    <div v-if="showError" class="row show-error">
      <p>{{ showError }}</p>
    </div>
    <h2>Sign Up page</h2>
    <label for="name">name</label>
    <input v-model="name" type="text" id="name">
    <br>
    <label for="email">email</label>
    <input v-model="email" type="text" id="email">
    <br>
    <label for="login">login</label>
    <input v-model="login" type="text" @input="cutStringTo16" id="login">
    <br>
    <label for="password">password</label>
    <input type="text" v-model="password" id="password">
    <br>
    <label for="password2">re-password</label>
    <input type="text" v-model="password2" id="password2">
    <div></div>
    <br>
    <button @click="register()">Registration</button>
  </div>
  <div v-else>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'register',
    data () {
      return {
        name: '',
        email: '',
        login: '',
        password: '',
        password2: '',
        showError: 0,
        maxLoginLength: 16,
        registrationSuccess: 0
      }
    },
    methods: {
      ...mapActions({
        signUp: 'signUp'
      }),
      register () {
        if (this.showError === 0) {
          var user = {
            name: this.name,
            email: this.email,
            login: this.login,
            password: this.password,
            password2: this.password2
          }
          this.signUp(user)
          this.$router.push('/login')
        }
      },
      cutStringTo16: function () {
        if (this.login.length > this.maxLoginLength) {
          this.showError = '`login` max length must be ' + this.maxLoginLength + ' symbols'
        } else {
          this.showError = 0
        }
      }
    }
  }
</script>
