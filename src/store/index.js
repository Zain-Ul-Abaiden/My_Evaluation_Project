import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
    allTasks: [],
    cart: [],
  },
  mutations: {
    SET_TASKS(state, payload) {
      state.tasks = payload;
    },
    UPDATE_TASK(state, { id, payload }) {
      state.allTasks.splice(id, 1, payload);
    },
    ADD_TO_CART(state, id) {
      state.cart.push(state.allTasks[id]);
    }
  },
  actions: {
    createTask(_, payload) {
      // localStorage.setItem(
      //   `${payload.price}`,
      //   `Title: ${payload.title} Description: ${payload.description} Price: ${payload.price}`
      // );

      this.state.allTasks.push({ 'title':payload.title , 'description':payload.description , 'price':payload.price  });
    },
    updateTask(_,{id,payload}) {
      console.log('in action---->', id,"DATA--->", payload)
      this.state.allTasks.splice(id,1,payload)
    },
    addToCart(_,id) {
      this.state.cart.push(this.state.allTasks[id])
    }
 
  
  },
  getters: {
    getAllTasks(state) {
      return state.allTasks;
    },
    getAllCart(state) {
      return state.cart
    },
  },
});
