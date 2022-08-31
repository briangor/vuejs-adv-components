<template>
    <div class="student-detail row">
        <div class="col-sm-12 col-md-6">
            <div class="img-container">
                <img src="../assets/images/photo-1629872430082-93d8912beccf.avif" alt="" class="img">
            </div>
        </div>
        <div class="col-sm-12 col-md-6">
            <div class="">
                <button v-for="tab in tabs" v-bind:key="tab.name"
                    v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
                    v-on:click="currentTab = tab" @click="showTab(currentTab.name)" class="btn btn-outline-primary">
                    {{ tab.name }}
                </button>
                <!-- <component v-bind:is="currentTab.component" class="tab"></component> -->
            </div>
            <button @click="showStudentSchema" class="btn btn-outline-success">Get Student Schema</button>
            <StudentGrades />
            <!-- update hooks -->
            <div ref="example-element">{{ counter }}</div>
        </div>

    </div>
</template>

<script>
var tabs = [
    {
        name: "Home",
        component: {
            template: "<div>Home component</div>"
        }
    },
    {
        name: "Posts",
        component: {
            template: "<div>Posts component</div>"
        }
    },
    {
        name: "Archive",
        component: {
            template: "<div>Archive component</div>"
        }
    }
];

import StudentGrades from './students/StudentGrades.vue';

export default {
    name: "StudentDetail",
    methods: {
        showTab(tab) {
            console.log(tab);
        },
        showStudentSchema() {
            console.log(this.$parent.studentSchema);
        }
    },
    data() {
        return {
            tabs: tabs,
            currentTab: tabs[0],
            text: 'Original StudentDetails text',
            counter: 0
        };
    },
    beforeCreate() {
        console.log('At this point, events and lifecycle in student detail component have been initialized.')
    },
    created() {
        this.text = 'New StudentDetail text';
        console.log(`StudentDetail text property updated to: ${this.text}`);
        // setInterval(() => {
        //     this.counter++
        // }, 1000)
    },
    beforeMount() {
        console.log(`StudentDetail just before mount`)
    },
    mounted() {
        console.log(`StudentDetail has been mounted to the DOM`);
    },
    beforeUpdate() {
        console.log(`At this point, Virtual DOM has not re-rendered or patched yet.`)
        // Logs the counter value every second, before the DOM updates.
        console.log(this.counter)
    },
    updated() {
        console.log(`At this point, Virtual DOM has re-rendered and patched.`)
        // Fired every second, should always be true
        console.log(+this.$refs['example-element'].textContent === this.counter)
    },
    beforeDestroy() {
        console.log(`At this point, watchers, child components, and event listeners have not been teared down yet.`)
    },
    destroyed() {
        console.log(`At this point, watchers, child components, and event listeners have been torn down.`)
        console.log(this)
    },
    components: { StudentGrades }
}
</script>