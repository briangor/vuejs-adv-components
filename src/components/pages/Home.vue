<template>
    <div class="home">
        <div>
            <img src="../../assets/images/logo.png" alt="">
        </div>
        <button @click="getRootData">Get Root Data</button>
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