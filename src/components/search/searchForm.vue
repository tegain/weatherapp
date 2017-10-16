<template>
  <div class="app--search">
    <form action="#" v-on:submit.prevent="searchCity" class="app--search_form">
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
            this.$store.dispatch('searchPicture', this.searchTerm)
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
    max-width: 640px;
    margin: 0 auto;

    &_form {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      border-radius: 2rem;
      box-shadow: 0 1rem 1.5rem rgba(#000, .25);
    }

    input {
      padding: .75rem 1.5rem;
      background: none;
      border: none;
      border-right: 1px solid #eee;
      display: block;
      width: 75%;

      &[type="text"] {
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        background: #fff;
      }

      &[type="submit"] {
        border: none;
        width: 25%;
        cursor: pointer;
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
        background: #7b4397;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #dc2430, #7b4397);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #dc2430, #7b4397); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
      }
    }

    select {
      display: inline-block;
      width: 15%;
      border: none;
      border-right: 1px solid #eee;
      padding: .75rem 1rem;
      background: #fff;
      // -webkit-appearance: none;
      // -moz-appearance: none;
      // appearance: none;
    }
  }
</style>
