<template>
  <h2>People</h2>
  <div :key="person" v-for="person in people">
    <h4>{{person.name}}</h4>
  </div>
  <form @submit="onSubmit">
    <div>
      <label>Name</label>
      <input type="text" name="name" v-model="name" placeholder="Person's name" />
    </div>
    <button type="submit">add</button>
  </form>

  <button>
    <router-link to="/">done</router-link>
  </button>
</template>

<script>
export default {
  name: 'PeoplePage',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.name) {
        alert('Please add a name')
        return
      }

      this.$store.commit('addPerson', this.name)
      this.name = ''
    }
  },
  computed: {
    people: {
      get() {
        return this.$store.state.people
      },
      set() {
      }
    }
  }
}
</script>

<style>

</style>