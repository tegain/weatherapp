<template>
  <div class="app--settings">
    <form action="#" v-on:submit.prevent="submitSettings">
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

    select {
      display: inline-block;
      width: 48%;
      border: none;
      padding: .75rem 1.5rem;
      border-radius: 2rem;
      margin-bottom: .5rem;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  }
</style>
