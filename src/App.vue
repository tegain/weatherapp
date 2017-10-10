<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: { }
  }
</script>

<style type="text/css" lang="scss">
  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    font-size: 1rem;
  }

  body {
    margin: 0;
  }

  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 60px;

    &--main {
       position: relative;
       z-index: 1;
    }

    &--weather {
      padding: 3rem;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
</style>
