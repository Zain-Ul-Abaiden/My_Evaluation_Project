<template>
 <nav class="w-full h-14 bg-indigo-200 flex justify-between px-4 items-center md:px-4">
<a class="text-2xl text-indigo-700 font-bold cursor-pointer" href="/navbar">Task Management App</a>
    <ul class="md:flex font-semibold">
        <li class="mx-[30px] cursor-pointer"><router-link to="/listTask">Task List</router-link></li>
        <li class="mx-[30px] cursor-pointer"><router-link to="/createTask">Task Creation</router-link></li>
        <li class="mx-[30px] cursor-pointer"><router-link to="/deleteTask">Task Deletion</router-link></li>
    </ul>
</nav>
</template>

<script>
    export default {
        name: 'MainNavbar',
    }
</script>

<style scoped>

</style>