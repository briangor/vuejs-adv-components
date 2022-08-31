<template>
    <div>
        <p>This is the students page</p>
        <StudentDetail />
    </div>
</template>

<script>
import StudentDetail from '../StudentDetail.vue';
export default {
    name: "StudentsPage",
    components: { StudentDetail },
    data() {
        return {
            studentSchema: ['Firstname', 'Lastname', 'Grade']
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
</style>