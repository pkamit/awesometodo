import Vue from 'vue'
const state = {
tasks : {
    'ID1' : {
        name: "Go to shop",
        completed: true,
        duedate: "22/05/2018",
        duetime: "14:45"
    },
    'ID2' : {
        name: "Go to banana",
        completed: false,
        duedate: "22/05/2018",
        duetime: "14:45"
    },
    'ID3' : {
        name: "Go to apples",
        completed: false,
        duedate: "22/05/2018",
        duetime: "14:45"
    }
}

   /* tasks: [
        {
          id: 1,
          name: "Go to shop",
          completed: true,
          duedate: "22/05/2018",
          duetime: "14:45"
        },
        {
          id: 2,
          name: "Go to banana",
          completed: false,
          duedate: "22/05/2018",
          duetime: "14:45"
        },
        {
          id: 3,
          name: "Go to apples",
          completed: false,
          duedate: "22/05/2018",
          duetime: "14:45"
        }
      ]*/
}

const mutations = {
  updateTask (state , payload) {
    Object.assign(state.tasks[payload.id] , payload.updates)
  },
  deleteTask( state , id) {
    Vue.delete(state.tasks , id)
  }

}

const actions = {

  updateTask({ commit }, payload){
     commit('updateTask' , payload);
  } ,
  deleteTask({ commit } , id){
    commit('deleteTask' , id);
  }
}

const getters = {
    tasks: (state) => {
        return state.tasks
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters


}
