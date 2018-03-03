<template>
  <div>

    <transition name="fade" mode="out-in">
      <div v-if="viewState === 'quizzes'" key="quizzes">
        <quiz :id="'quiz_' + quiz.id" v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" @view-quiz="viewQuiz" @delete-quiz="deleteQuiz"></quiz>
      </div>

      <div v-if="viewState === 'cards'" key="cards">
        <button class="ui labeled icon button back" @click="viewQuizzes">
          <i class="arrow circle left icon"></i>
          Back
        </button>

        <div id="card_view" class="ui cards">
          <flash-card :id="'card_' + card.id" v-for="card in this.selectedQuiz.cards" :key="card.id" :card="card" @delete-card="deleteCard"></flash-card>
        </div>
      </div>


    </transition>

  </div>
</template>


<script>

import Quiz from './Quiz'
import FlashCard from './FlashCard'

export default {
  props:['quizzes'],
  components: {
    Quiz,
    FlashCard,
  },
  data() {
    return {
      selectedQuiz: {cards:[]},
      viewState: "quizzes",
    }
  },
  methods: {
    viewQuiz(quiz) {
      this.selectedQuiz = quiz
      this.viewState = "cards"
      this.$emit('change-state', {
        viewState: "cards",
        activeQuiz: quiz.id
      })
    },
    viewQuizzes() {
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
    },
    deleteCard(card) {
      const cardId = card.id
      const parent = this
      $('#card_' + cardId).fadeOut('slow', () => {
        const cardIndex = parent.selectedQuiz.cards.indexOf(card)
        parent.selectedQuiz.cards.splice(cardIndex, 1)
      })
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
