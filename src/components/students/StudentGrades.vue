<template>
    <div class="student-grades">
      <h5>Student Grades Component</h5>
      <p>{{ studentSchema }}</p>
      <input type="text" placeholder="Seen by">
    </div>
</template>
<script>
export default {
    name: 'StudentGrades',
    inject: ['studentSchema']
}
</script>
<style>
  .student-grades {
    padding: 2rem 1rem;
  }
</style>