import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  keys: {
    // Flickr
    flickrPublic: 'dfbaf0f79426fab241a4ae6a47e01727',
    flickrSecret: '8f7c33da69736808',

    // OWM
    OWMPublic: '8d0eaadfe6a385e8c8e254bf8e055417'
  },

  searchPicture () {
    // Search for Flickr picture
  },

  searchCity (city, unit, lang) {
    // Search for city
    // let URL = 'api.openweathermap.org/data/2.5/find?q=' + city + '&units=' + unit + '&lang=' + lang + '&APPID=' + this.keys.OWMPublic

    let URL = 'https://jsonplaceholder.typicode.com/users'
    return this.$http.get(URL)
  }
}
