<template>
  <div id="app-wrapper" class="app--wrapper" data-template="app">
    <transition name="slide" appear>
      <div id="app-main" class="app--main">
        <app-background></app-background>

        <app-header></app-header>
        <div id="app-weather" class="app--weather">
          <weather-card></weather-card>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style type="text/css" lang="scss">
  [data-template="app"] {
    padding-left: 4rem;
    background: #f093fb;

    .app--main {
      background: #fff;
      padding-right: 55vw;
      transform: scale(1,1);
      transform-origin: 100% 0;
      transition: transform .5s;

      &.slide-enter,
      &.slide-leave-to {
        transform: scale(0, 1);
      }
    }
  }
</style>
