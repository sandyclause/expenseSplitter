<template>
  <form @submit="onSubmit">
    <div
      v-for="(person, key) in people"
      :key="key"
    >
      <input
        type="checkbox"
        id="person.name"
        :value="person.name"
        v-model="checked"
      >
      <label for="person.name">{{ person.name }}</label>
    </div>
    <div>
      <label>Expense Name</label>
      <input type="text" name="name" v-model="name" placeholder="Expense Name" />
      <label>Expense Amount</label>
      <input type="number" name="amount" v-model="amount" placeholder="Expense Amount" />
    </div>
    <button type="submit">add</button>
  </form>
</template>

<script>
export default {
  name: 'ExpensePage',
  data() {
    return {
      name: '',
      amount: '',
      checked: []
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      this.$store.dispatch('addExpense', {
        people: this.checked,
        expense: {
          name: this.name,
          amount: this.amount
        }
      })

      this.name = ''
      this.amount = ''
      this.checked = []
    }
  },
  computed: {
    people() {
      return this.$store.getters.people
    }
  }
}
</script>

<style>

</style>