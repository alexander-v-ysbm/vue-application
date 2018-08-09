import Vue from 'vue'
const state = {
  user: []
}

const getters = {
  checkUser (state) {
    console.log(state.user)
    if (state.user.name) {
      console.log('12312312')
      return 'Alex ' + state.user.name[0]
    }
    return false
  }
}

const actions = {
  logOut ({ commit }) {
    let user = []
    commit('addUser', user)
    Vue.cookie.delete('token')
  },
  signUp ({ commit }, user) {
    user.name = Vue.cookie.get('token')
    Vue.cookie.get('token')
    commit('addUser', user)
  }
}

const mutations = {
  addUser (state, user) {
    state.user = user
    console.log(user)
    console.log(state.user)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
