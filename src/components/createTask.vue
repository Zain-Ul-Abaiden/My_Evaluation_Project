<template>
   <MainNavbar />
    <form @submit.prevent="create(this.form)" class="border-2">
      
      <label for="title">Title</label>
      <input type="text" placeholder="Enter title here" required v-model="form.title">
      
      <label for="description">Description</label>
      <textarea class="textarea" type="text" placeholder="Enter description here" v-model="form.description"></textarea>
      
      <label for="price">Price</label>
      <input type="number" placeholder="Enter price here" v-model="form.price">

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
                price: null,
                title: null,
                description: null
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
textarea {
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