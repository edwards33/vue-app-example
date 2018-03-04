import * as types from '../mutation-types'

const state = {
  quizzes: new Array()
}

// getters
const getters = {
  quizzes: state => state.quizzes
}

// actions
const actions = {
  setQuizzes ({ commit }, value) {
    commit(types.SET_QUIZZES, value)
  }
}

// mutations
const mutations = {
  [types.SET_QUIZZES] (state, value) {
    state.quizzes = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}