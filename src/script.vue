<script setup>
  import { ref } from 'vue';

  const count = ref(0);
  const align = 'center';
</script>

<template>
  <div class="container">
    <h1>Hello, Vue!</h1>
    <img class="logo" alt="logo" src="http://127.0.0.1:8080/livecodes/assets/templates/vue.svg" />
    <p>You clicked {{ count }} times.</p>
    <button @click="count++">Click me</button>
  </div>
</template>

<style scoped>
  .container,
  .container button {
    text-align: v-bind("align");
    font: 1em sans-serif;
  }
  .logo {
    width: 150px;
  }
</style>
