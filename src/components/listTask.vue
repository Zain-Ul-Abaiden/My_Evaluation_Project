<template>
    <MainNavbar />
      <form class="border-2">
        <label for="id">ID</label>
        <input type="number" placeholder="Enter id here" v-model="id">

        <button type="submit" @click="read(id)">Submit</button>
    </form>
        <li class="list-none">
            <p>{{ getTask }}</p>
        </li>

  </template>
  
  <script>
  import { mapGetters,mapActions } from 'vuex'
import MainNavbar from './mainNavbar.vue';
  
  export default {
    name: 'listTask',
    data() {
        return {
            id: null
        };
    },
    methods: {
        ...mapActions({ read: 'readTasks' })
    },
    computed: {
        ...mapGetters({ getTask: 'getTasksList' })
    },
    components: { MainNavbar }
}
  </script>
  
  
  <style scoped>
  form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: black;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  color: #555;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  margin-left: 120px;
  
}
  </style>
  