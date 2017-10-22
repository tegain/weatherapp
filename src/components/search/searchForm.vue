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
      box-shadow: 0 .5rem 3rem rgba(#000, .2);
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
        background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);

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
