<template>

  <div class="ui basic content center aligned segment">
    <button class="ui basic button icon" v-show="!isCreating" @click="openForm">
      <i class="plus icon"></i>
    </button>

    <div class="ui centered card" v-show="isCreating">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Title</label>
            <input v-model="titleText" type="text"></input>
          </div>
          <div class="field">
            <label>Description</label>
            <input v-model="descriptionText" type="text"></input>
          </div>
          <div class="ui buttons">
            <button class="ui green button" @click="saveQuiz">Save</button>
            <div class="or"></div>
            <button class="ui red button" @click="closeForm">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>

export default {
  data() {
    return {
      isCreating: false,
      titleText: "",
      descriptionText: "",
    }
  },
  methods: {
    openForm() {
      this.isCreating = true
    },
    closeForm() {
      this.isCreating = false
    },
    saveQuiz() {
      this.$emit('create-quiz', {
        title: this.titleText,
        description: this.descriptionText
      });
      this.titleText = ""
      this.descriptionText = ""
      this.isCreating = false
    }
  }
}

</script>


<style>

</style>
