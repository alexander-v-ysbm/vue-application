<template>
  <div>
    <ol>
      <li v-for="item in items">
        <router-link v-bind:to="item.link">{{ item.message }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menu: 'App Top menu',
        items: [
          { link: '/', message: 'Home' },
          { link: '/about', message: 'About' },
          { link: '/comment', message: 'Comment' }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app-top-menu ol {
    list-style: none;
  }
  .app-top-menu ol li {
    float:left;
    padding:0 15px;
  }
  .app-top-menu ol li:hover {
    padding-top: 2px;
  }
  .app-top-menu ol li a{
    color: #35495E;
    text-decoration: none;
  }
  .app-top-menu ol li a:hover {
    color: #41B883;
  }
</style>
