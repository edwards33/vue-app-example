<template>
  <div class="ui centered card">
    <a class="ui red right corner label" @click="deleteCard(card)">
      <i class="trash icon"></i>
    </a>
    <div class="content">
      <div class="header">
        {{card.term}}
      </div>
      <div class="description">
        {{card.definition}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['card'],
  methods: {
    deleteCard(card) {
      this.$emit('delete-card', card)
    }
  }
}

</script>

<style>

</style>
