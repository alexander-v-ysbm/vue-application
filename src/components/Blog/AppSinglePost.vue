<template>
  <div>
    <div v-if="posts">
      <div v-for="post in posts">
        <div v-if="$route.params.slug === post.slug">
          <h2>{{ post.title }}</h2>
          <img :src="'http://127.0.0.1:8000/images/'+post.image" alt="">
          <div>{{ post.blog }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'single-post',
    data: () => ({
      slug: null
    }),
    computed: {
      ...mapGetters({
        posts: 'getPosts'
      })
    },
    methods: {
      ...mapGetters([
        'getSinglePostBySlug'
      ]),
      ...mapActions({
        addPostsToState: 'addPostsToState'
      })
    },
    created () {
      this.slug = this.$route.params.slug
      this.addPostsToState()
    }
  }
</script>

<style>
  img {
    height: 200px;
  }
</style>
