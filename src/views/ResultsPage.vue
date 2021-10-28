<template>
  <h2>Results</h2>

  <div
    v-for="(person, key) in people"
    :key="key"
  >
    <h3>{{ person.name }}</h3>
    <p
      v-for="(expense, _key) in person.expenses"
      :key="_key"
    >
      {{ expense.name }} ${{expense.amount}}
    </p>
    <p>total cost: ${{ totalCost(person.expenses) }}</p>
  </div>
</template>

<script>
export default {
  name: 'Results',
  methods: {
    totalCost(expenses) {
      console.log(expenses)

      const total = expenses.reduce((acc, expense) => {
        const expenseAmount = expense.amount;
        return acc + expenseAmount
      }, 0)

      return total
    }
  },
  computed: {
    people() {
      return this.$store.getters.people
    },
  }
}
</script>

<style>

</style>