<template>
    <div class="courses">
        <h5>Courses Offered</h5>
        <div v-for="course in cData" :key="course.id">
            <li>{{ course.title }}</li>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../global/Footer.vue';
let courses = [
    {
        "id": 1,
        "title": "VueJS Basics"
    },
    {
        "id": 2,
        "title": "Vue Routing"
    },
    {
        "id": 3,
        "title": "Handling Asynchronous Data"
    },
    {
        "id": 4,
        "title": "Axios and Its Implementation"
    },
    {
        "id": 5,
        "title": "VueJS Dynamic Components"
    },
    {
        "id": 6,
        "title": "Vue and The Ecosystem"
    },
    {
        "id": 7,
        "title": "Vue Instance"
    },
    {
        "id": 8,
        "title": "Lifecycle hooks in Vue"
    }
]
export default {
    name: "CoursesPage",
    data() {
        return {
           cData: courses
        }
    },
    components: { Footer }
}
</script>
<style>
    .courses {
        padding: 2rem 4rem;
    }
</style>