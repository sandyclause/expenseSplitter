<template>
  <h1>test</h1>
  <router-link to="/people">Add people</router-link>
  <router-link to="/expense">Add expense</router-link>
  <ResultsPage />
</template>

<script>
import ResultsPage from '@/views/ResultsPage'

export default {
  name: 'Home',
  components: {
    ResultsPage
  }
}
</script>
