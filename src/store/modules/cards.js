import * as types from '../mutation-types'

const state = {
  cards: new Array()
}

// getters
const getters = {
  cards: state => state.cards
}

// actions
const actions = {
  setCards ({ commit }, value) {
    commit(types.SET_CARDS, value)
  }
}

// mutations
const mutations = {
  [types.SET_CARDS] (state, value) {
    state.cards = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}