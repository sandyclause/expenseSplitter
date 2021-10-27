<template>
  <div id="nav">
    <h1>{{ title }}</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'yoyo',
    }
  },
  components: {
  }
}
</script>
