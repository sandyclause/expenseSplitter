import { createStore } from 'vuex'

export default createStore({
  state: {
    people: {}
  },
  getters: {
    people: state => {
      return state.people
    }
  },
  mutations: {
    addPerson(state, name) {
      state.people[name] = {
        name,
        expenses: []
      }
    },
    removePerson(state, name) {
      delete state[name]
    },
    addExpense(state, {people, expense}) {

      for (var i = 0; i < people.length; i++) {
        const person = people[i]
        state.people[person].expenses.push(expense)
      }
    }
  },
  actions: {
    addExpense({commit}, payload) {
      commit('addExpense', payload)
    }
  },
  modules: {
  }
})
