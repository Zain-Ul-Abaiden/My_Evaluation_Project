<template>
    <MainNavbar />
    <div class="mt-5 h-80 justify-content">
        <div class="mt-20">
            <router-link to="/createTask">
                <button>Task Creation</button>
            </router-link>
        </div>
        <div class="mt-5">
            <router-link to="/deleteTask">
                <button>Task Deletion</button>
            </router-link>
        </div>
        <div class="mt-5">
            <router-link to="/taskByID">
                <button>Search by ID</button>
            </router-link>
        </div>
        <div class="mt-5">
            <router-link to="/displayTasks">
                <button>Show all Task</button>
            </router-link>
        </div>
    </div>
</template>


<script>
import MainNavbar from './mainNavbar.vue';

    export default {
    name: 'HeroComponent',
    components: { MainNavbar }
}
</script>

<style scoped>
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 10px;
    color: white;
    border-radius: 20px;
  }

</style>