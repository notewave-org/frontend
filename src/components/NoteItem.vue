<template>
  <RouterLink
      :to="{ name: Pages.Note, params: { noteId: note.id } }"
      custom
      v-slot="{ isActive, navigate }"
  >
    <div :class="[classes.noteItem, isActive ? classes.active : '']" @click="navigate">
      <h5 :class="classes.title">
        {{ note.title }}
      </h5>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { Pages } from '../router/pages'
import type { Note } from '../types'

defineProps<{
  note: Note
}>()
</script>

<style module="classes">
.noteItem {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
}
.noteItem.active,
.noteItem:not(.active):hover {
  background: #333333;
  border-radius: 8px;
}
.title {
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>