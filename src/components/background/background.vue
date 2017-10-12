<template>
  <div id="app-background" class="app--background">
    <!--<div class="app&#45;&#45;background_picture" :style="'background-image: url(//riz-cantonais.net/wp-content/uploads/2015/08/chengdu-home.jpg)'"></div>-->
    <div class="app--background_picture" :style="'background-image: url(' + $store.state.userSettings.pictureUrl + ')'"></div>
  </div>
</template>

<script>
  export default {
    name: 'appBackground',

    data () {
      return {
        picture: this.$store.state.userSettings.pictureUrl
      }
    }
  }
</script>

<style type="text/css" lang="scss">
  .app--background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: #222;

    &_picture {
      position: absolute;
      top: -2rem;
      left: -2rem;
      bottom: -2rem;
      right: -2rem;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      opacity: .3;
    }
  }
</style>
