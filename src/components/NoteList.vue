<template>
  <div :class="classes.noteList">
    <NoteItem
        v-for="note in notes"
        :note="note"
        :key="note.id"
    />
    <p v-if="notes.length === 0" :class="classes.empty">
      Создайте первую заметку
    </p>
  </div>
</template>

<script setup lang="ts">
import NoteItem from './NoteItem.vue'
import type { Note } from '../types'

defineProps<{
  notes: Note[]
}>()
</script>

<style module="classes">
.noteList {
  display: grid;
  row-gap: 4px;
}
.empty {}
</style>