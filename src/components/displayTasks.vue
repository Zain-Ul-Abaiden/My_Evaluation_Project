<template>
    <MainNavbar />
    <div class="mt-10">
      <h1 class="text-2xl text-indigo-700 font-bold cursor-pointer">Your Tasks</h1>
    </div>
    <ul class="flex border-2 p-4 m-4 justify-between" >
      <div class="">
        <li class="" v-for="(item, index) in displayAllTask" :key="index">
          <p class="text-xl">Title: {{ item.title }}</p>
          <p class="text-xl">Dscription: {{ item.description }}</p>
          <p class="text-xl">Price: {{ item.price }}</p>
          Index: {{ index }}
          
          <UpdateTask :prevTasks="item" :indx="index"></UpdateTask>
          <!-- <div class=""> -->
             <button class="mx-5 bg-blue-500" @click="addToCart(index)">Add to Cart</button>
             <button class="mx-5 bg-blue-500" @click="navigateToUpdateTask(index)">Edit</button>
             <button class="bg-red-500" @click="deleteTask(index)">Delete</button>
           <!-- </div> -->
        </li>

      </div>

    </ul>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
 import MainNavbar from './mainNavbar.vue'
 import UpdateTask from './updateTask.vue'
  
  export default {
    name: 'DisplayTasks',
    components: { MainNavbar, UpdateTask },
    data() {
      return {
        prevTasks: '',
        indx: '',
        updatedTasks: null
      }
    },


    computed: {
      ...mapGetters({ displayAllTask: 'getAllTasks' })
    },
    methods: {
      deleteTask(id) {
        this.displayAllTask.splice(id, 1);
      },
      ...mapActions({addCart:'addToCart'}),
      ...mapActions({ updatedTasks: 'updateTask' }),

      navigateToUpdateTask() {
      this.$router.push("/updateTask");
    },
        addToCart(index){
          this.addCart(index)
        }
    }
  };
  </script>
  
  <style scoped>
  button {
    border: 0;
    padding: 10px 20px;
    margin-top: 10px;
    color: white;
    border-radius: 20px;
  }
  .status-select {
    border: 2;
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 20px;
  }
  </style>
  