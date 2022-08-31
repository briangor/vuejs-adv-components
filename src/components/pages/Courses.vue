<template>
    <div class="courses">
        <h5>Courses offered</h5>
        <div v-for="course in courses" :key="course.id">
            <li>{{ course.title }}</li>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoursesPage',
    data() {
        return{ 
            courses:[
                {
                    id: 1,
                    title: 'Vue Instance'
                },
                {
                    id: 2,
                    title: 'Vue Router'
                },
                {
                    id: 3,
                    title: 'Lifecycle hooks in Vue'
                }
            ]
        }
    }
    
}
</script>
<style></style>