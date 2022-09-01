<template>
    <div class="student-grades">
      <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">Basics</span>
      <input type="text" class="form-control" >
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">Routing</span>
      <input type="text" class="form-control" >
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">Data Handling</span>
      <input type="text" class="form-control" >
    </div>
      
      <input type="text" placeholder="Signed by">
    </div>
</template>
<script>
export default {
    name: 'StudentGrades',
    inject: ['studentSchema'],
    methods: {
      getStudentSchema(){
        alert(studentSchema)
        console.log(studentSchema);
      }
    }
}
</script>
<style>
  .student-grades {
    padding: 2rem 1rem;
  }
</style>