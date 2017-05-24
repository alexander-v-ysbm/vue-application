<template>
  <div id="comment-box">
    <div v-if="showError" class="row show-error">
      <p>{{ showError }}</p>
    </div>
    <div class="row">
      <label for="name">Name</label>
      <input v-model="name" id="name" name="name" @input="cutStringTo10" type="text">
    </div>
    <div class="row">
      <label for="comment">Comment</label>
      <textarea
      v-model="textarea"
      name="comment" id="comment" cols="30" rows="10">
      </textarea>
    </div>
    <div class="row">
    <button @click="addComment">Comment</button>
    </div>
    <div class="row" v-if="name != '' || textarea !=''">
      <p>You({{ name | maxSymbols }}) say: {{ textarea }}</p>
    </div>
    <div class="row alert-msg" v-else>
      Please write your comment
    </div>
  </div>
</template>

<script>
  import Hello from '@/components/Hello'
  export default {
    name: 'comment',
    components: { Hello },
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
        var review = {
          name: this.name,
          comment: this.textarea
        }
        if (!this.showError) {
          this.$store.dispatch('addReview', review)
          this.$router.push('/')
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
    padding: 45px 0;
    width:300px;
    margin:0 auto;
  }
  .row {
    float:left;
    width:100%;
    text-align: left;
    padding:5px 15px;
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
