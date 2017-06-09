import Vue from 'vue'
const state = {
  users: [
    {name: 'Alexander', login: 'alexvap23', password: '12345678'}
  ],
  signIn: 0
}

const getters = {
  signInCheck (state) {
    return state.signIn
  },
  checkUser (state) {
    if (state.signIn) {
      if (Vue.cookie.get('user')) {
        var name = Vue.cookie.get('user')
        return name
      } else {
        state.signIn = 0
        this.$router.push('/login')
      }
    }
    return false
  }
}

const actions = {
  signIn ({state}, user) {
    for (var u in state.users) {
      if (state.users[u].login === user.login) {
        if (state.users[u].password === user.password) {
          state.signIn = 1
        }
      }
    }
  },
  logOut ({state}) {
    Vue.cookie.delete('user')
    state.signIn = 0
  },
  signUp ({ commit }, user) {
    commit('addUser', user)
  }
}

const mutations = {
  addUser (state, user) {
    state.users.push(user)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
