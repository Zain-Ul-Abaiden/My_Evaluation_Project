<template>
    <div class="card px-8 py-11 max-w-full flex flex-col items-center">
      <h2 class="font-bold text-center mb-4 text-xl">Edit Task</h2>
       {{ prevTasks , indx}}
      <div class="w-full max-w-md">
        <label class="block font-semibold mb-2">Title:</label>
        <input
          v-model="editedTask.title"
          class="border border-gray-300 w-full px-3 py-2 mb-4"
        />
  
        <label class="block font-semibold mb-2">Description:</label>
        <textarea
          v-model="editedTask.description"
          class="border border-gray-300 w-full px-3 py-2 mb-4"
        ></textarea>
  
        <button
          type="submit"
          @click="updateTaskInStore"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Task
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    name: "UpdateTask",
    props: {
      prevTasks: {
        type: Object,
        required: true,
      },
      indx: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        editedTask: {
          title: '',
          description: '',
        },
      };
    },
    mounted() {
      console.log(this.$props);
    
    },
    methods: {
      ...mapActions({ updateTask: 'updateTask' }),
      updateTaskInStore() {
        console.log("in the component---->", this.editedTask)
        this.updateTask({ id: this.index, payload: this.editedTask });
        this.$router.push("/displayTasks");
      },
    },
    computed: {
      // ...mapGetters({ getTask: "getAllTasks" }),
      // tasks() {
      //   return this.getTask.find((task) => task.id == this.$route.params.id);
      // },
    },
  };
  </script>
  