<style src="./_app.scss" lang="scss"></style>

<template>
  <div id="app" class="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <button @click="clearAll()" style="position: fixed; bottom: 50px; right: 50px; z-index: 10; background: #fff; padding: 1rem;">Clear</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      clearAll () {
        localStorage.clear()
        sessionStorage.clear()
      }
    },
    components: { }
  }
</script>
