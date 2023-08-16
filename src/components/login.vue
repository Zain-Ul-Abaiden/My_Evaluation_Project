<template>
  <div class="mt-10"><h1 class="text-2xl text-indigo-700 font-bold cursor-pointer">Welcome to Login Page</h1></div>
    <form class="border-2" @submit.prevent="handleLogin">
      <label>Email: </label>
      <input 
        type="text"
        placeholder="Enter email here"
        required
        v-model="email"
      />
  
      <label>Password: </label>
      <input
        type="password"
        placeholder="Enter password here"
        required
        v-model="password"
      />
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="successfull" class="successfull">{{ successfull }}</div>
      <br />
      <br />

      <div class="flex justify-center">
        <v-btn class="bg-blue-500 text-white" type="submit">Login</v-btn>
      </div>
      <router-link class="flex justify-center" to="/signup">
        <v-btn class="">Create New Account</v-btn>
      </router-link>
    </form>
  </template>
  
  <script>

  export default {
    name: 'Login',
    data() {
      return {
        email: "",
        password: "",
        error: "",
        successfull: ""
      };
    },
    methods: {
      handleLogin() {
        // Retrieve stored email and password from local storage
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        
  
        // Check if the entered email and password match the stored values
        if (this.email === storedEmail && this.password === storedPassword) {
          alert("Login Successfull")
          this.$router.push('/heroComponent');
        } else {
          this.error = "Invalid email or password. Please try again.";
        }
      },
    },
  };
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
    display: black;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    color: #555;
  }
  button {
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 20px;
  }
  
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
  
  
  </style>
  