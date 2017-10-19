<template>
  <div id="app-wrapper" class="app--wrapper" data-template="index">
    <div id="app-main" class="app--main">
      <div id="app-selector" class="app--selector">
        <h1>Weather</h1>
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
    /*background: #1a1429;*/
    height: 100vh;

    h1 {
      color: #fff;
      font-weight: 700;
      font-size: 2rem;
      text-transform: lowercase;
      letter-spacing: .5rem;
      margin-bottom: 4rem;
    }
  }
</style>
