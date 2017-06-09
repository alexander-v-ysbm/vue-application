<template>

</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'logout',
    created () {
      this.logOut()
      this.$router.push('/')
    },
    methods: {
      ...mapActions({
        logOut: 'logOut'
      })
    }
  }
</script>
