import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import DefaultButton from "./components/global/DefaultButton.vue";

Vue.config.productionTip = false;
//Vue.component('DefaultButton', DefaultButton)
new Vue({
  render: h => h(App),
  data: {
    rootData: 'String from root'
  },
  computed: {
    bar: function () { 
      return 'computed property in root'
    }
  },
  methods: {
    baz: function () { 
      console.log('method in root')
    }
  }
}).$mount('#app')

Vue.component('async-example', function (resolve) {
  setTimeout(function () {
    // Pass the component definition to the resolve callback
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
