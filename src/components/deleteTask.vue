<template>
    <MainNavbar />
    <form>
        <label for="id">ID</label>
        <input type="number" placeholder="Enter id here" v-model="id">
    </form>
    <div class="submit">
        <button type="submit" @click="deleteTaskById(id)">Submit</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import MainNavbar from './mainNavbar.vue';
    export default {
    name: 'DeleteTask',
    data() {
        return {
            id: null
        };
    },
    methods: {
        ...mapActions({ deleteTaskById: 'deleteTask' })
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
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  
}
</style>