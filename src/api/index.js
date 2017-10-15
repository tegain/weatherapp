import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  keys: {
    // Flickr
    flickrPublic: 'dfbaf0f79426fab241a4ae6a47e01727',
    flickrSecret: '8f7c33da69736808',

    // OWM
    OWMPublic: '8d0eaadfe6a385e8c8e254bf8e055417'
  },

  searchPicture (city, perPage = 20) {
    // Search for Flickr picture
    let URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + this.keys.flickrPublic + '&tags=cityscape%2C+' + city + '&per_page=' + perPage + '&format=json&nojsoncallback=1&sort=interestingness-desc&content_type=1&accuracy=11&tag_mode=all'
    return Vue.axios.get(URL)
  },

  searchCity (city, unit, lang) {
    // Search for city
    let URL = '//api.openweathermap.org/data/2.5/find?q=' + city + '&units=' + unit + '&lang=' + lang + '&APPID=' + this.keys.OWMPublic

    // let URL = 'https://jsonplaceholder.typicode.com/users'
    return Vue.axios.get(URL)
  }
}
