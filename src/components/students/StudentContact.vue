<template>
  <div class="std-contact">
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">First Name</span>
      <input type="text" class="form-control" >
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">Last Name</span>
      <input type="text" class="form-control" >
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
      <input type="text" class="form-control" >
    </div>
  </div>
</template>
<script>
export default {
  name: 'StudentContact'
}
</script>
<style>
  .std-contact {
    margin-top: 1rem;
    padding: 1rem;
  }
</style>