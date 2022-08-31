<template>
  <div id="app">
    <Navbar/>
    <p>This is root App page</p>
    <component :is="currentView" />
  </div>
</template>

<script>
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import NotFound from './components/pages/NotFound.vue'
import Navbar from './components/Navbar.vue'
import StudentsVue from './components/pages/Students.vue'

const routes = {
  '/': Home,
  '/about': About,
  '/students': StudentsVue,
}

export default {
  name: 'App',
  components: {
    Navbar
},
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }

}
</script>

<style>
@import '../src/assets/scss/style.scss';
</style>
