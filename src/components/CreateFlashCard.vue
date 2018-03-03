<template>

  <div class="ui basic content center aligned segment">
    <button class="ui basic button icon" v-show="!isCreating" @click="openForm">
      <i class="plus icon"></i>
    </button>

    <div class="ui centered card" v-show="isCreating">
      <div class="content">
        <div class="ui form">
          <div class="field">
            <label>Term</label>
            <input v-model="termText" type="text"></input>
          </div>
          <div class="field">
            <label>Definition</label>
            <input v-model="definitionText" type="text"></input>
          </div>
          <div class="ui buttons">
            <button class="ui green button" @click="saveFlashCard">Save</button>
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
      termText: "",
      definitionText: "",
    }
  },
  methods: {
    openForm() {
      this.isCreating = true
    },
    closeForm() {
      this.isCreating = false
    },
    saveFlashCard() {
      this.$emit('create-flash-card', {
        term: this.termText,
        definition: this.definitionText
      });
      this.termText = ""
      this.definitionText = ""
      this.isCreating = false
    }
  }
}

</script>


<style>

</style>
