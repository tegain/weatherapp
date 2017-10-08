<template>
  <div id="app-weather" class="app--weather_card">
    <h1>{{ $store.state.cities[0].name }}</h1>
    <span class="temperature">{{ $store.state.cities[0].main.temp - 273.15 }}</span>
    <span class="unit">{{ unit }}</span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        city: '',
        temperature: '',
        unit: '°C'
      }
    },

    methods: {
      getTemperature () {
        return 'coucou'
      }
    }
  }
</script>

<style type="text/css" lang="scss">
  .app--weather_card {
    text-align: left;
    line-height: 1.1;
    font-size: 1.5em;
    color: #fff;

    h1 {
      margin-bottom: .5rem;
    }

    .temperature,
    .unit {
      font-size: 1.5rem;
    }
  }
</style>
