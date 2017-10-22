<template>
  <div id="app-background" class="app--background">
    <div class="app--background_picture" :style="'background-image: url(' + $store.state.userSettings.picturesUrl[Math.floor(Math.random() * $store.state.userSettings.picturesUrl.length)] + ')'">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'appBackground',

    data () {
      return {
        pictures: this.$store.state.userSettings.picturesUrl
      }
    },

    filters: {
      randomize: function (value) {
        if (!value) return ''
        return value[Math.floor(Math.random() * value.length)]
      }
    }
  }
</script>

<style type="text/css" lang="scss">
  .app--background {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    width: 55vw;
    height: 100%;
    background: #1a1429;

    &_picture {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      opacity: .3;
      transition: opacity .4s;
      transition-delay: .5s;
    }
  }
</style>
