import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favCity: localStorage.getItem('favCity') || null,
    favUnit: localStorage.getItem('favUnit') || 'metric',
    favLang: localStorage.getItem('favLang') || 'en',
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
    searchCity (context, terms) {
      let searchedCity = terms.city.trim()

      return new Promise((resolve, reject) => {
        if (searchedCity.length > 0) {
          console.log(`Searching forecast for ${terms.city}...`)

          // Ajax call here
          API.searchCity()
            .then((response) => {
              resolve(response)
              context.commit('changeFavCity', searchedCity)
            }, (response) => {
              reject(response)
            })
        } else {
          console.error('City name can\'t be empty')
        }
      })
    },

    convertUnit (tk, tc) {
      // T(°C) = T(K) - 273.15
      console.log('convertUnit()')
    }
  },

  mutations: {
    changeFavCity (state, searchedCity) {
      state.favCity = searchedCity
      // state.cities[0].name = searchedCity
      localStorage.setItem('favCity', searchedCity)
    },

    changeFavUnit (state, unit) {
      // Add Unit to localStorage and change state favUnit value
    }
  }
})
