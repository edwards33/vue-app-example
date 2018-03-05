<template>
  <div>
    <div class="ui shape">
      <div class="sides">
        <div class="active side">
          <div class="ui card">
            <div class="content">
              <div class="description">
                {{front}}
              </div>
            </div>
          </div>
        </div>
        <div class="side">
          <div class="ui card">
            <div class="content">
              <div class="description">
                {{back}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ui grid">
      <div class="ui hidden divider"></div>
      <div class="three column row">
        <div class="column"></div>
        <div class="column">
          <button class="ui icon button" @click="flipBack">
            <i class="retweet icon"></i>
          </button>
          <button class="ui right labeled icon button" @click="openNext">
            <i class="right arrow icon"></i>
            Next
          </button>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
  
</template>


<script>

export default {
  props:['index', 'front', 'back'],
  data() {
    return {
      frontActive: true
    }
  },
  methods: {
    flipBack() {
      $('.shape').shape('flip back')
      this.frontActive = !this.frontActive
    },
    openNext() {
      if(!this.frontActive) {
        $('.shape').shape('flip back')
        this.frontActive = true
      }
      $('.shape').transition('bounce')
      this.$emit('open-next', this.index)
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
