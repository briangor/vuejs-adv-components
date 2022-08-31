<template>
    <div>
        <h5>Async Component</h5>
    </div>
</template>
<script>
export default {
    name: 'AsyncComponent',
    methods: {
        getMessage(resolve) {
            setTimeout(function () {
                // Pass the component definition to the resolve callback
                resolve({
                    template: '<div>I am async!</div>'
                })
            }, 1000)
        }
    }
}
</script>
<style>
</style>