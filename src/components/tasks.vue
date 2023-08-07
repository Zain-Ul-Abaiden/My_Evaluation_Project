<template>
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
            <router-link to="/listTask">
                <button>Task List</button>
            </router-link>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Tasks',
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