<template>
  <div id="app">
    <Navbar/>
    <component :is="currentView" />
  </div>
</template>

<script>
import Home from './components/pages/Home.vue'
import NotFound from './components/pages/NotFound.vue'
import Navbar from './components/Navbar.vue'
import Students from './components/pages/Students.vue'
import Courses from './components/pages/Courses.vue'

const routes = {
  '/': Home,
  '/students': Students,
  '/courses': Courses,
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
