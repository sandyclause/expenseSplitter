import { createStore } from 'vuex'

export default createStore({
  state: {
    people: []
  },
  mutations: {
    addPerson(state, name) {
      state.people.push(name)
    },
    removePerson(state, name) {
      state.people.filter(x => x === name)
    }
  },
  actions: {
  },
  modules: {
  }
})
