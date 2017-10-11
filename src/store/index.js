import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favCity: localStorage.getItem('favCity') || null,
    favUnit: localStorage.getItem('favUnit') || 'metric',
    favLang: localStorage.getItem('favLang') || 'en',
    userSettings: JSON.parse(localStorage.getItem('userSettings')) || null,
    cities: [
      {
        'coord': {
          'lon': 104.07,
          'lat': 30.67
        },
        'weather': [
          {
            'id': 701,
            'main': 'Mist',
            'description': 'mist',
            'icon': '50n'
          }
        ],
        'base': 'stations',
        'main': {
          'temp': 294.15,
          'pressure': 1014,
          'humidity': 88,
          'temp_min': 294.15,
          'temp_max': 294.15
        },
        'visibility': 4500,
        'wind': {
          'speed': 1,
          'deg': 330
        },
        'clouds': {
          'all': 40
        },
        'dt': 1507471200,
        'sys': {
          'type': 1,
          'id': 7461,
          'message': 0.0607,
          'country': 'CN',
          'sunrise': 1507417308,
          'sunset': 1507459198
        },
        'id': 1815286,
        'name': 'Chengdu',
        'cod': 200
      }
    ]
  },

  actions: {
    searchCity ({ commit, dispatch }, terms) {
      let searchedCity = terms.city.trim()

      return new Promise((resolve, reject) => {
        if (searchedCity.length > 0) {
          let searchedUnit = this.state.userSettings.unit
          let searchedLang = this.state.userSettings.lang

          console.log(`Searching ${searchedLang} forecast for ${terms.city} in ${searchedUnit}...`)

          // Ajax call here
          API.searchCity(searchedCity, searchedUnit, searchedLang)
            .then((response) => {
              resolve(response)

              // this.dispatch('searchPicture', searchedCity)
              commit('changeFavCity', searchedCity)
            }, (response) => {
              reject(response)
            })
        } else {
          console.error('City name can\'t be empty')
        }
      })
    },

    searchPicture (city) {
      console.log(city)
    },

    submitSettings (context, settings) {
      let settingsCity = settings.city.trim()

      return new Promise((resolve, reject) => {
        if (settingsCity.length > 0) {
          let convertedUnit = (settings.unit === 'metric') ? '°C' : '°F'

          const userSettings = {
            city: settings.city,
            unit: settings.unit,
            unitConverted: convertedUnit,
            lang: settings.lang
          }

          resolve(userSettings)
          context.commit('addUserSettings', userSettings)
        } else {
          reject('City name can\'t be empty')
        }
      })
    }
  },

  mutations: {
    /**
     * @param state
     * @param searchedCity
     * Update state values: replace 'state.userSettings.city' by the searched city, and edit local storage item
     */
    changeFavCity (state, searchedCity) {
      if (state.userSettings !== null) {
        state.userSettings.city = searchedCity

        localStorage.setItem('userSettings', JSON.stringify(state.userSettings))
      }
    },

    addUserSettings (state, settings) {
      state.userSettings = settings
      localStorage.setItem('userSettings', JSON.stringify(settings))
    }
  }
})
