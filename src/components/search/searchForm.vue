<template>
  <div class="app--search">
    <form action="#" v-on:submit.prevent="searchCity">
      <input id="search-city" type="text" placeholder="Search city" v-model="searchTerm" required>

      <input type="submit" value="Search">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'searchForm',

    data () {
      return {
        searchTerm: ''
      }
    },

    methods: {
      searchCity: function (e) {
        this.$store.dispatch('searchCity', { city: this.searchTerm })
          .then((success) => {
            console.info(success)
          })
          .catch((error) => {
            console.error(error)
          })
      }
    }
  }
</script>

<style type="text/css" lang="scss">
  .app--search {
    width: 90%;
    max-width: 420px;
    margin: 0 auto;

    input {
      padding: .75rem 1.5rem;
      border-radius: 2rem;
      border: none;
      display: block;
      margin-bottom: .5rem;
      width: 100%;
    }
  }
</style>
