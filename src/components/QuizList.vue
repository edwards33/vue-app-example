<template>
  <div>

    <transition name="fade" mode="out-in">
      <div v-if="viewState === 'quizzes'" key="quizzes">
        <div class="ui hidden divider"></div>
        <quiz :id="'quiz_' + quiz.id" v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" @view-quiz="viewQuiz" @delete-quiz="deleteQuiz"></quiz>
      </div>

      <div v-if="viewState === 'cards'" key="cards">
        <button class="ui labeled icon button back" @click="viewQuizzes">
          <i class="arrow circle left icon"></i>
          Back
        </button>

        <div id="card_view" class="ui cards" v-if="!lesson">
          <flash-card :id="'card_' + card.id" v-for="card in this.selectedQuiz.cards" :key="card.id" :card="card" @delete-card="deleteCard"></flash-card>
        </div>
        <div id="lesson-view" class="ui center aligned segment" v-if="lesson">
          <lesson :front="textFront" :back="textBack" :index="currentIndex" @open-next="openNextCard"></lesson>
        </div>
      </div>


    </transition>

  </div>
</template>


<script>

import Quiz from './Quiz'
import FlashCard from './FlashCard'
import Lesson from './Lesson'
import * as _ from 'lodash'

export default {
  props:['quizzes', 'lesson'],
  components: {
    Quiz,
    FlashCard,
    Lesson
  },
  data() {
    return {
      selectedQuiz: {cards:[]},
      viewState: "quizzes",
      shuffledCards: [],
      currentIndex: 0,
      textFront: '',
      textBack: ''
    }
  },
  methods: {
    viewQuiz(quiz) {
      this.selectedQuiz = quiz
      this.shuffleSetOfCards()
      var firstCard = this.shuffledCards[0]
      this.setFlashCard(0, firstCard)

      this.viewState = "cards"
      this.$emit('change-state', {
        viewState: "cards",
        activeQuiz: quiz.id
      })
    },
    viewQuizzes() {
      if(this.lesson) {
        this.$emit('control-lesson', false)
      }
      this.viewState = "quizzes"
      this.$emit('change-state', {
        viewState: "quizzes",
        activeQuiz: 0
      })
    },
    deleteQuiz(quiz) {
      const quizId = quiz.id
      const parent = this
      $('#quiz_' + quizId).fadeOut('slow', () => {
        const quizIndex = parent.quizzes.indexOf(quiz)
        parent.quizzes.splice(quizIndex, 1)
      })
      this.deleteQuizAndCardsFromStore(quizId)
    },
    deleteCard(card) {
      const cardId = card.id
      const parent = this
      $('#card_' + cardId).fadeOut('slow', () => {
        const cardIndex = parent.selectedQuiz.cards.indexOf(card)
        parent.selectedQuiz.cards.splice(cardIndex, 1)
      })
      this.deleteCardsFromStore(this.selectedQuiz.id, cardId)
    },
    deleteQuizAndCardsFromStore(quizId) {
      var quizzesSaved = this.$store.getters.quizzes
      var cardsSaved = this.$store.getters.cards

      var cardsToSave = cardsSaved.filter(card => card.quizId !== quizId)
      var quizzesToSave = quizzesSaved.filter(quiz => quiz.id !== quizId)

      this.$store.dispatch('setQuizzes', quizzesToSave.slice())
      this.$store.dispatch('setCards', cardsToSave.slice())
    },
    deleteCardsFromStore(quizId, cardId) {
      var cardsSaved = this.$store.getters.cards

      var card = _.filter(cardsSaved, { 'id': cardId, 'quizId': quizId })

      _.pull(cardsSaved, card[0])

      this.$store.dispatch('setCards', cardsSaved.slice())
    },
    shuffleSetOfCards() {
      this.shuffledCards = _.shuffle(this.selectedQuiz.cards)
    },
    setFlashCard(index, card) {
      this.textFront = card.term
      this.textBack = card.definition
      this.currentIndex = index
    },
    openNextCard(index) {
      index++
      if(this.shuffledCards.length > index) {
        var card = this.shuffledCards[index]
        this.setFlashCard(index, card)
      }
      else {
        this.shuffleSetOfCards()
        this.setFlashCard(0, this.shuffledCards[0])
        this.$emit('control-lesson', false)
      }
    }
  },
  watch: {
    lesson(value) {
      if(true) {
        this.shuffleSetOfCards()
      }
    }
  }
}

</script>


<style>

.fade-enter-active,
.face-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#card_view {
  margin-top: 30px;
}

</style>
