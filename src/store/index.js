import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userSettings: JSON.parse(localStorage.getItem('userSettings')) || null,
    cityDatas: JSON.parse(sessionStorage.getItem('cityDatas')) || []
  },

  actions: {
    searchCity (context, terms) {
      let searchedCity = terms.city.trim()

      return new Promise((resolve, reject) => {
        if (searchedCity.length > 0) {
          let searchedUnit = this.state.userSettings.unit
          let searchedLang = this.state.userSettings.lang

          console.log(`Searching ${searchedLang} forecast for ${terms.city} in ${searchedUnit}...`)

          // Ajax call here
          API.searchCity(searchedCity, searchedUnit, searchedLang)
            .then((response) => {
              console.log(response.data)
              resolve(response.data)

              context.commit('changeFavCity', searchedCity)
            }, (response) => {
              reject(response)
            })
        } else {
          console.error('City name can\'t be empty')
        }
      })
    },

    searchPicture (context, city) {
      return new Promise((resolve, reject) => {
        if (city) {
          const picturesPerRequest = 30

          /**
           * @doc Flickr API
           * Photos Search: https://www.flickr.com/services/api/flickr.photos.search.html
           * URLS: https://www.flickr.com/services/api/misc.urls.html
           */
          API.searchPicture(city, picturesPerRequest)
            .then((response) => {
              resolve(console.log(response))

              // Build Picture URL
              const datas = response.data.photos.photo

              const pictureDatas = {
                size: 'h'
              }

              const pictures = []
              datas.forEach((picture) => {
                pictures.push(`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}_${pictureDatas.size}.jpg`)
              })

              context.commit('setPicture', pictures)
            }, (response) => {
              reject(console.error('Flickr API error: ' + response.message))
            })
        } else {
          reject(console.error('city not found'))
        }
      })
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
            lang: settings.lang,
            picturesUrl: '' // Property must exist: https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
          }

          resolve(userSettings)
          context.commit('setUserSettings', userSettings)
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

    setUserSettings (state, settings) {
      state.userSettings = settings
      localStorage.setItem('userSettings', JSON.stringify(settings))
    },

    setPicture (state, pictures) {
      // state.userSettings.picturesUrl = city.toLowerCase()
      state.userSettings.picturesUrl = pictures
      localStorage.setItem('userSettings', JSON.stringify(state.userSettings))
    }
  }
})
