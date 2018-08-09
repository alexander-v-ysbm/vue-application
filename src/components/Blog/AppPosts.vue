<template>
  <div v-if="posts.length" class="blog">
    <h2>Latest posts</h2>
    <div v-for="post in posts" @postsAdded="posts.push($event)">
      <div class="post-box" :post-id="post.id">
        <router-link :to="'/blog/post/'+post.slug"><h2 class="post-title">{{ post.title }}</h2></router-link>
        <div class="post-body">
          <img :src="'http://127.0.0.1:8000/images/'+post.image" alt="">
          {{ post.blog }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'posts',
    computed: {
      ...mapGetters({
        posts: 'getPosts'
      })
    },
    data: () => ({
      errors: 0
    }),
    methods: {
      ...mapActions({
        addPostsToState: 'addPostsToState'
      })
    },
    created () {
      this.addPostsToState()
    }
  }
</script>
<style>
  .blog {
    text-align: left;
    max-width: 600px;
    margin: 0 auto;
  }
  .blog .post-box {
    width: 100%;
    float: left;
  }
  .blog h2 {
    font-size: 18px;
    color: #35495E;
  }
  .blog h2:hover {
    font-size: 18px;
    color: #41B883;
  }
  .blog img {
    max-width: 30%;
    height: 100px;
    float: left;
    padding-right: 10px;
  }
</style>
