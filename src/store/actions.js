export default {
  addReview ({ commit }, review) {
    setTimeout(() => {
      commit('addReview', review)
    }, 1000)
  }
}
