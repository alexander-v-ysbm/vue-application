import axios from 'axios'

const state = {
  posts: []
}

const getters = {
  getPosts (state) {
    return state.posts
  }
}

const actions = {
  addPostsToState ({ commit }) {
    let posts = []
    axios.get(`http://127.0.0.1:8000/api/posts`)
      .then(response => {
        posts = response.data
        commit('addPostsToState', posts)
      })
      .catch(e => {
        commit('addError', e)
      })
  }
}

const mutations = {
  addPostsToState (state, data) {
    state.posts = []
    for (let i = 0; i < data.posts.length; i++) {
      state.posts.push(data.posts[i])
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
