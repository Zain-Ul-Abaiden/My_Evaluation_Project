import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
    allTasks: [],
  },
  mutations: {
    SET_TASKS(state, payload) {
      state.tasks = payload;
    },

  },
  actions: {
    createTask(_, payload) {
      localStorage.setItem(
        `${payload.id}`,
        `Title: ${payload.title} Discription: ${payload.discription}`
      );
      this.state.allTasks.push({ 'title':payload.title , 'discription':payload.discription });
    },
    readTasks({ commit }, id) {
      const response = localStorage.getItem(id);
      commit("SET_TASKS", response);
    },
    deleteTask(_, id) {
      localStorage.removeItem(`${id}`);
    },
    updateTask(_,{id,payload}) {
      this.state.allTasks[id]=payload
    }
 
  
  },
  getters: {
    getTasksList(state) {
      return state.tasks;
    },
    getAllTasks(state) {
      return state.allTasks;
    },
  },
});
