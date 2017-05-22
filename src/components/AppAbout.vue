<template>
  <div>
    <p>{{ staticText }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      staticText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate doloribus laborum quos veritatis? Commodi, cum, cupiditate eligendi harum illum ipsum maiores minus, mollitia nulla officiis similique voluptatibus! Architecto asperiores aut autem consequatur corporis cum dolor dolorem ducimus, error esse est, expedita fuga illum, in maiores nam rerum sapiente temporibus.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
