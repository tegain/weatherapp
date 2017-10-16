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

  [data-template="index"] {
    background: #1a1429;
    height: 100vh;
  }
</style>
