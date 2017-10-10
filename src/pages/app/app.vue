<template>
  <div id="app-wrapper" class="app--wrapper" data-template="app">
    <app-background></app-background>

    <div id="app-main" class="app--main">
      <app-header></app-header>
      <div id="app-weather" class="app--weather">
        <weather-card></weather-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>
