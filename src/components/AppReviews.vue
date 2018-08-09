<template>
  <b-col class="main">
    <b-row>
      <b-col>
        <h2>Reviews:</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="reviews-box" v-for="review in reviews" @reviewAdded="reviews.push($event)">
          <div class="review-name"><strong>{{ review.name }}</strong> say:</div>
          <div class="review-comment">{{ review.comment }}</div>
        </div>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'reviews',
    computed: mapGetters({
      reviews: 'getReviews'
    }),
    data: () => ({
      users: [],
      errors: []
    })
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
