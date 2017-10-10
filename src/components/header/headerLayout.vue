<template>
  <div id="app-header" class="app--header">
    <router-link :to="{ name: 'home' }">App</router-link>
    <app-search></app-search>
  </div>
</template>

<script>
  export default {
    name: 'appHeader'
  }
</script>

<style type="text/css" lang="scss">

</style>
