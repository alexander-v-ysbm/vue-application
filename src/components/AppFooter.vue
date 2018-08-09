<template>
  <div class="app-footer">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'This is footer'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .app-footer {
   float: left;
   background: #848484;
   border-top:1px solid #636363;
   width: 100%;
   padding: 5px;
 }
</style>
