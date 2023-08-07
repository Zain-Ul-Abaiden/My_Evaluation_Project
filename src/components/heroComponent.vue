<template>
<MainNavbar/>
<Tasks />
</template>

<script>
import MainNavbar from './mainNavbar.vue';
import Tasks from './tasks.vue';

    export default {
    name: 'HeroComponent',
    components: { Tasks, MainNavbar }
}
</script>

<style scoped>

</style>