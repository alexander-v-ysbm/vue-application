<template>
  <b-row id="comment-box">
    <b-col>
      <b-row is="app-reviews"></b-row>
      <b-row v-if="showError" class="show-error">
        <b-col>{{ showError }}</b-col>
      </b-row>
      <b-row>
        <b-col>
          <label for="name">Name</label>
          <input v-model="name" id="name" name="name" @input="cutStringTo10" type="text">
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label for="comment">Comment</label>
          <textarea
          v-model="textarea"
          name="comment" id="comment" cols="30" rows="10">
          </textarea>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <button @click="addComment">Comment</button>
        </b-col>
      </b-row>
      <b-row v-if="name != '' || textarea !=''">
        <b-col>
          <p>You({{ name | maxSymbols }}) say: {{ textarea }}</p>
        </b-col>
      </b-row>
      <b-row class="alert-msg" v-else>
        <b-col>
        Please write your comment
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
  import AppReviews from '@/components/AppReviews'
  export default {
    name: 'comment',
    components: { AppReviews },
    data () {
      return {
        name: '',
        textarea: '',
        showError: 0,
        maxNameLength: 16
      }
    },
    methods: {
      addComment: function () {
        let review = {
          name: this.name,
          comment: this.textarea
        }
        if (!this.showError) {
          this.$store.dispatch('addReview', review)
        }
      },
      cutStringTo10: function () {
        if (this.name.length > this.maxNameLength) {
          this.showError = '`name` max length must be ' + this.maxNameLength + ' symbols'
        } else {
          this.showError = 0
        }
      }
    },
    filters: {
      maxSymbols: function (value) {
        return value.substring(0, 15)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #comment-box {
    margin:0 auto;
  }
  .row label {
    width:200px;
  }
  .row input, .row textarea {
    width:200px;
    float:right;
    border:1px solid #41B883;
    color: #35495E;
  }
  .row button {
    margin: 0 auto;
  }
  .alert-msg {
    color: #FFEE66;
  }
  .show-error {
    color: orangered;
  }
</style>
