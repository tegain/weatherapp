<template>
  <div id="app-header" class="app--header">
    <app-search></app-search>
  </div>
</template>

<script>
  export default {
    name: 'appHeader'
  }
</script>

<style type="text/css" lang="scss">
  .app--header {
    position: relative;
    z-index: 3;
  }
</style>
