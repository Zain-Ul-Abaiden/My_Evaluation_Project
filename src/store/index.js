import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks:''
  },
  mutations: {
    SET_TASKS(state, payload) {
      state.tasks = payload
      
    }
  },
  actions: {
    async createTask(_,payload) {
      const response = await localStorage.setItem(`${payload.id}`,`Title: ${payload.title} Discription: ${payload.discription}`)
      console.log(response)
    },
    async readTasks({commit},id) {
      const response = await localStorage.getItem(`${id}`)
      commit('SET_TASKS',response)
    },
    async deleteTask( _,id) {
      await localStorage.removeItem(`${id}`)
      
    }
  },
  getters: {
    getTasksList(state) {
      return state.tasks
    }
  },
})