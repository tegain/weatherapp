<template>
  <div id="app-weather" class="app--weather_card">
    <span class="temperature">{{ $store.state.cityDatas.main.temp | roundize }}</span>
    <span class="unit">{{ $store.state.userSettings.unitConverted }}</span>
    <h1>{{ $store.state.userSettings.city | capitalize }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'weatherCard',

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
    },

    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      },

      roundize: function (value) {
        if (!value) return ''
        value = parseFloat(value)
        return Math.round(value)
      }
    }
  }
</script>

<style type="text/css" lang="scss">
  .app {
    &--weather {
      padding: 3rem;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      &_card {
        text-align: left;
        line-height: 1.1;
        font-size: 1em;
        color: #1a1429;

        h1 {
          margin-top: 0;
          margin-bottom: .5rem;
        }

        .temperature,
        .unit {
          display: inline-block;
          vertical-align: middle;
        }

        .temperature {
          font-size: 5.5rem;
        }

        .unit {
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
