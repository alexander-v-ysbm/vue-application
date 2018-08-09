const state = {
  errors: []
}

const getters = {
  getErrors (state) {
    return state.errors
  }
}

const actions = {
  removeErrors ({ commit }) {
    commit('removeErrors')
  },
  addError ({ commit }, error) {
    setTimeout(() => {
      commit('addError', error)
    }, 100)
  }
}

const mutations = {
  removeErrors (state) {
    state.errors = []
  },
  addError (state, error) {
    error = {text: error}
    state.errors.push(error)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
