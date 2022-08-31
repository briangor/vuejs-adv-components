<template>
    <div class="home">
        <p>This is the home page</p>
        <div>
            <img src="../../assets/images/logo.png" alt="">
        </div>
        <button @click="getRootData" class="btn btn-outline-primary">Get Root Data</button>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
        }
    },
    methods: {
        getRootData(){
            console.log(this.$root.rootData);
        }
    }
    
}
</script>
<style></style>