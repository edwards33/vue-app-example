import Vue from 'vue'
import Vuex from 'vuex'
import Cards from './modules/cards'
import Quizzes from './modules/quizzes'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: window.localStorage, 
  })

export default new Vuex.Store({
  modules: {
    Cards,
    Quizzes
  },
  plugins: [vuexLocalStorage.plugin]
})