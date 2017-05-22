<template>
  <div class="main">
    <h2>Reviews:</h2>
      <div class="reviews-box" v-for="review in reviews" @reviewAdded="reviews.push($event)">
        <div class="review-name"><strong>{{ review.name }}</strong> say:</div>
        <div class="review-comment">{{ review.comment }}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
    reviews () {
      return this.$store.state.reviews
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    padding:0 30px;
  }
  .reviews-box {
    width:25%;
    float: left;
    padding-bottom:30px;
  }
  .review-name {
    font-size:120%;
    color:#41B883;
  }
  .review-comment {
    color: #35495E;
  }
</style>
