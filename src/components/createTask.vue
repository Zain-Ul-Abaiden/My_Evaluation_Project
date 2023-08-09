<template>
   <MainNavbar />
    <form @submit.prevent="create(this.form)" class="border-2">
        <label for="id">ID</label>
        <input type="number" placeholder="Enter id here" v-model="form.id">

        <label for="title">Title</label>
        <input type="text" placeholder="Enter title here" v-model="form.title">

        <label for="discription">Discription</label>
        <input type="text" placeholder="Enter discription here" v-model="form.discription">

        <div class="submit" >
            <button type="submit" >Add Task</button>
        </div>
    </form>
</template>

<script>;
import { mapActions } from 'vuex';
import MainNavbar from './mainNavbar.vue';
export default {
  name: 'CreateTask',
  components: { MainNavbar },
    data() {
        return {
            form: {
                id: null,
                title: null,
                discription: null
            }
            
        };
    },
    methods: {
        ...mapActions({ create: 'createTask' })
      },
    
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
  
}
.submit {
  text-align: center;
  margin: 25px 0 15px;
  margin-left: 20px;
}

</style>