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
    <span>Checked names: {{ checkedNames }}</span>
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