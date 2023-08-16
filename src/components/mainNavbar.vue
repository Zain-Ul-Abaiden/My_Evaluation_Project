<template>
 <nav class="w-full h-14 bg-indigo-200 flex justify-between px-4 items-center md:px-4">
<router-link class="text-xl md:text-2xl text-indigo-700 font-bold cursor-pointer" to="/heroComponent">Task Management App</router-link>
    <ul class="md:flex font-semibold hidden justify-self-center ">
        <!-- <li class="mx-[30px] cursor-pointer"><router-link to="/displayTasks">Update Task</router-link></li> -->
        <li class="mx-[30px] cursor-pointer"><router-link to="/createTask">Task Creation</router-link></li>
        <li class="mx-[30px] cursor-pointer"><router-link to="/displayTasks">Task Deletion</router-link></li>
    </ul>
    <button class="bg-indigo-500 text-white font-bold py-2 px-4 rounded"><router-link to="/" @click="msg()">Logout</router-link></button>
</nav>
</template>

<script>
    export default {
        name: 'MainNavbar',
        methods:
        {
            msg(){
            alert("Logout Successfull")
            }
        }
    }
</script>

<style scoped>

</style>