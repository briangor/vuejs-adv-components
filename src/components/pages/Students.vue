<template>
    <div>
        <div class="row">
            <div class="col- col-sm-12">
                <StudentDetail />
            </div>
            <div class="col-sm-12 px-4">
                <div class="row">
                    <div v-for="student in sData" class="student-card col-sm-12 col-md-4 col-lg-3">
                    <img :src="student.image" alt="" class="student-img">
                    <h6>{{ student.name }}</h6>
                </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import StudentDetail from '../StudentDetail.vue';
import Footer from '../global/Footer.vue';
let students = [
    {
        "id": 1,
        "name": "Erling Haaland",
        "image": "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        "id": 2,
        "name": "Julian Alvarez",
        "image": "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZGVudCUyMG1hbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
        "id": 3,
        "name": "Pep Guardiola",
        "image": "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN0dWRlbnQlMjBtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        "id": 4,
        "name": "Kevin De Bruyne",
        "image": "https://images.unsplash.com/photo-1558487661-9d4f01e2ad64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN0dWRlbnQlMjBtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
        "id": 5,
        "name": "Ruben Dias",
        "image": "https://images.unsplash.com/photo-1524538198441-241ff79d153b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudCUyMG1hbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    },
    {
        "id": 6,
        "name": "Riyad Mahrez",
        "image": "https://images.unsplash.com/photo-1621905253185-95614217f357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnQlMjBtYWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    }
]
export default {

    name: "StudentsPage",
    components: { StudentDetail, Footer },
    data() {
        return {
            studentSchema: ['Firstname', 'Lastname', 'Grade'],
            sData: students
        }
    },
    provide: function () {
        return {
            studentSchema: this.studentSchema
        }
    }
}
</script>
<style>
    .student-img {
        width: 10rem;
        height: auto;
        object-fit: cover;
    }
</style>