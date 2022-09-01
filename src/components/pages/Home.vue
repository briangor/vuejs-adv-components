<template>
    <div class="home">
        <img src="../../assets/images/lucidchart-edu-lesson-plans-header.png" alt="" class="home-header-img">
        <div class="container pt-3">
            <div class="row">
                <div class="col-sm-12 col-md-9 ">
                    <h5>Top Courses</h5>
                    <ul>
                        <li v-for="course in cData">{{ course.title }}</li>
                    </ul>
                    <h5>Top Students</h5>
                    <ul>
                        <li v-for="student in sData">{{ student.name }}</li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-3">
                    <div>
                        <img src="../../assets/images/logo.png" alt="">
                    </div>
                    <button @click="getRootData" class="btn btn-outline-primary">Get Root Data</button>
                    <p>{{ rData }}</p>
                </div>
            </div>
        </div>
        <Footer />
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
    }
]

let students = [
    {
        "id": 1,
        "name": "Erling Haaland"
    },
    {
        "id": 2,
        "name": "Julian Alvarez"
    },
    {
        "id": 3,
        "name": "Pep Guardiola"
    },
    {
        "id": 4,
        "name": "Kevin De Bruyne"
    },
    {
        "id": 5,
        "name": "Ruben Dias"
    },
    {
        "id": 6,
        "name": "Riyad Mahrez"
    }
]

export default {
    name: "HomePage",
    data() {
        return {
            //rData: '',
            cData: courses,
            sData: students
        };
    },
    methods: {
        getRootData() {
            console.log(this.$root.rootData);
            console.log(courses);
            this.cData = courses;
        },
        setRootData() {
            this.rData = this.$root.rootData;
        }
    },
    components: { Footer }
}
</script>
<style>
</style>