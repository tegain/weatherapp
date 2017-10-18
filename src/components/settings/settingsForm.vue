<template>
  <div class="app--settings">
    <form action="#" v-on:submit.prevent="submitSettings" class="app--settings_form">
      <input id="search-city" type="text" placeholder="Search city" v-model="settingsCity" required>

      <select name="search-unit" id="search-unit" v-model="settingsUnit">
        <option value="metric">°C</option>
        <option value="imperial">°F</option>
      </select>

      <select name="search-lang" id="search-lang" v-model="settingsLang">
        <option value="en" selected="selected">EN</option>
        <option value="fr">FR</option>
        <option value="zh_cn">ZH</option>
      </select>

      <input type="submit" value="Search">
    </form>
  </div>
</template>

<script>
  export default {
    name: 'settingsForm',

    data () {
      return {
        settingsDevice: (window.innerWidth <= 960) ? 'mobile' : 'desktop',
        settingsCity: '',
        settingsUnit: 'metric',
        settingsLang: 'lang-en'
      }
    },

    methods: {
      submitSettings () {
        this.$store.dispatch('submitSettings', { device: this.settingsDevice, city: this.settingsCity, unit: this.settingsUnit, lang: this.settingsLang }).then((success) => {
          this.$store.dispatch('searchCity', { city: this.settingsCity }).then((success) => {
            this.$store.dispatch('searchPicture', this.settingsCity).then((success) => {
              this.$router.push('/')
            })
          })
        })
        // console.log(`City: ${this.settingsCity} ; Unit: ${this.settingsUnit} ; Lang: ${this.settingsLang}`)
      }
    }
  }
</script>

<style type="text/css" lang="scss">
  .app--settings {
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
      width: 50%;

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
    }
  }
</style>
