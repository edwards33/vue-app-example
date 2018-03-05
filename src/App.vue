<template>
  <div id="app">
    <quiz-list :lesson="beginLesson" :quizzes="quizzes" @change-state="changeState" @control-lesson="startOrStopLesson"></quiz-list>
    <create-quiz v-show="viewState === 'quizzes'" @create-quiz="createQuiz"></create-quiz>
    <create-flash-card v-show="viewState === 'cards'" @create-flash-card="createFlashCard" @control-lesson="startOrStopLesson" v-if="!beginLesson"></create-flash-card>
  </div>
</template>

<script>

import QuizList from './components/QuizList'
import CreateQuiz from './components/CreateQuiz'
import CreateFlashCard from './components/CreateFlashCard'
import * as _ from 'lodash'

const DEFAULT_QUIZZES = [{
    id: 1,
    title: "Chapter 1",
    description: "This is a sample description.",
    cards: [
      {
        id: 1,
        term: "Some Word",
        definition: "Some Definition"
      },
      {
        id: 2,
        term: "Another Word",
        definition: "The definition of another word"
      }
    ]
  },{
    id: 2,
    title: "Chapter 2",
    description: "This is a another sample description.",
    cards: [

    ]
}]

export default {
  name: 'app',
  components: {
    QuizList,
    CreateQuiz,
    CreateFlashCard
  },
  mounted() {
    var quizzesSaved = this.$store.getters.quizzes
    var cardsSaved = this.$store.getters.cards

    if(quizzesSaved.length === 0) {
      this.saveDefaultQuizzesToStore()
      quizzesSaved = this.$store.getters.quizzes
    }

    quizzesSaved.forEach(quiz => {
      quiz['cards'] = cardsSaved.filter(card => card.quizId === quiz.id)
      this.quizzes.push(quiz)
    })
  },
  methods: {
    createQuiz(newQuiz) {
      const maxId = Math.max.apply(Math, this.quizzes.map(q => {
        return q.id
      }))
      const nextId = maxId + 1
      this.quizzes.push({
        id: nextId,
        title: newQuiz.title,
        description: newQuiz.description,
        cards: []
      })

      this.saveQuizToStore(nextId, newQuiz.title, newQuiz.description)
    },
    changeState(state) {
      this.viewState = state.viewState
      this.activeQuiz = state.activeQuiz
    },
    createFlashCard(newCard) {
      var id = this.activeQuiz
      var quizzes = $.grep(this.quizzes, e => { 
        return e.id == id 
      })

      if(quizzes.length == 0) {
        return
      }

      const quiz = quizzes[0]
      var maxId = 0

      if(quiz.cards && quiz.cards.length > 0) {
        maxId = Math.max.apply(Math, quiz.cards.map(q => {
          return q.id
        }))
      }
      const nextId = maxId + 1

      quiz.cards.push({
        id: nextId,
        term: newCard.term,
        definition: newCard.definition
      })

      this.saveCardToStore(nextId, id, newCard.term, newCard.definition)
    },
    saveQuizToStore(id, title, description) {
      var quizzesSaved = this.$store.getters.quizzes
      quizzesSaved.push({
        id,
        title,
        description
      })
      this.$store.dispatch('setQuizzes', quizzesSaved)
    },
    saveCardToStore(id, quizId, term, definition) {
      var cardsToStore = this.$store.getters.cards
      cardsToStore.push({
        id,
        quizId,
        term,
        definition
      })
      this.$store.dispatch('setCards', cardsToStore)
    },
    saveDefaultQuizzesToStore() {
      _.forEach(DEFAULT_QUIZZES, quiz => {
        this.saveQuizToStore(quiz.id, quiz.title, quiz.description)
        _.forEach(quiz.cards, card => {
          this.saveCardToStore(card.id, quiz.id, card.term, card.definition)
        })
      })
    },
    startOrStopLesson(islessonControl) {
      this.beginLesson = islessonControl
    }
  },
  data() {
    return {
      beginLesson: false,
      quizzes: [],
      viewState: "quizzes",
      activeQuiz: 0
    }
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>