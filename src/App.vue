<template>
  <div :class="classes.container">
    <Sidebar />

    <div :class="classes.view">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>

<style module="classes">
.container {
  display: grid;
  grid-template-columns: 20% 1fr;
  height: 100vh;
}
.view {
  padding: 16px;
  overflow-y: auto;
}
</style>