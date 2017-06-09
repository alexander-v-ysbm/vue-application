const state = {
  reviews: [
    {name: 'Ivan', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, inventore.'},
    {name: 'Alexander', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, inventore.'},
    {name: 'Artem', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, inventore.'},
    {name: 'Alex', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, inventore.'}
  ]
}

const getters = {
  getReviews (state) {
    return state.reviews
  }
}

const actions = {
  addReview ({ commit }, review) {
    setTimeout(() => {
      commit('addReview', review)
    }, 1000)
  }
}

const mutations = {
  addReview (state, review) {
    state.reviews.push(review)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
