<template>
  <div id="app-wrapper" class="app--wrapper" data-template="index">
    <div id="app-main" class="app--main">
      <div id="app-selector" class="app--selector">
        <h1>WeatherApp</h1>
        <settings-form></settings-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'settings'
  }
</script>

<style type="text/css" lang="scss">
  .app--wrapper {
    padding-top: 60px;
  }

  [data-template="index"] {
    background: #202020;
    height: 100vh;
  }
</style>
