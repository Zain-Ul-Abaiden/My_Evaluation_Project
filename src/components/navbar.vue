<template>
<MainNavbar/>
<Tasks />
</template>

<script>
import MainNavbar from './mainNavbar.vue';
import Tasks from './tasks.vue';

    export default {
    name: 'Navbar',
    components: { Tasks, MainNavbar }
}
</script>

<style scoped>

</style>