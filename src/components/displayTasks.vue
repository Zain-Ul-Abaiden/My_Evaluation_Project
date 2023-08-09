<template>
    <MainNavbar />
    <div class="mt-10">
      <h1 class="text-2xl text-indigo-700 font-bold cursor-pointer">Your Tasks</h1>
    </div>
    <ul class="flex border-2 p-4 m-4 justify-between" v-for="(item, index) in displayAllTask" :key="index">
      <div>
        <li>
          <p class="text-xl">Title: {{ item.title }}</p>
          <p class="text-xl">Discription: {{ item.discription }}</p>
        </li>
      </div>
      <div class="flex justify-left">
        <select v-model="item.selectedStatus" class="status-select">
          <option
            v-for="(statusOption, statusIndex) in status"
            :key="statusIndex"
            :value="statusOption.name"
          >
            {{ statusOption.name }}
          </option>
        </select>
       <label> Completion Status: </label>
        <p :style="{ color: status.find(s => s.name === item.selectedStatus)?.color }">

           {{ item.selectedStatus }}
        </p>
    </div>
    <button @click="updateTasks(index)">Edit</button>
    <button @click="deleteTask(index)">Delete</button>
    </ul>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  import MainNavbar from './mainNavbar.vue';
  
  export default {
    name: 'DisplayTasks',
    components: { MainNavbar },
    data() {
      return {
        status: [
          { name: 'In-Progress', color: 'blue' },
          { name: 'Completed', color: 'green' },
          { name: 'Pending', color: 'red' }
        ],
        selectedStatus: 'In-Progress',
      };
    },
    computed: {
      ...mapGetters({ displayAllTask: 'getAllTasks' })
    },
    methods: {
      deleteTask(id) {
        this.displayAllTask.splice(id, 1);
      },
      ...mapActions({ updateTasks: 'updateTask' })
    }
  };
  </script>
  
  <style scoped>
  button {
    background: red;
    border: 0;
    padding: 10px 20px;
    margin-top: 10px;
    color: white;
    border-radius: 20px;
  }
  .status-select {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 10px;
    color: white;
    border-radius: 20px;
  }
  </style>
  