<template>
  <div v-if="errors.length" class="error-block">
    <div class="close"><i @click="close()" class="fa fa-close"></i></div>
    <div v-for="error in errors">
      <p>{{ error.text }}</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'error-module',
    computed: mapGetters({
      errors: 'getErrors'
    }),
    methods: {
      ...mapActions({
        removeErrors: 'removeErrors'
      }),
      close () {
        this.removeErrors()
      }
    }
  }
</script>

<style scoped>
  .error-block {
    height:auto;
    background: #e2d7c4;
    width:200px;
    right: 5%;
    top: 5%;
    position: fixed;
    box-shadow: 1px 1px 3px #474747;
    padding: 5px;
    border-radius: 5px;
  }
  .error-block .close {
    position: absolute;
    right:-10px;
    top:-10px;
  }
  .error-block .close i {
    background: #fff;
    width:20px;
    height: 20px;
    color:#35495E;
    border:2px solid #35495E;
    border-radius: 50%;
    font-size:15px;
  }
</style>
