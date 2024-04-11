<template>
  <div :class="classes.folderItem">
    <div :class="classes.folderItemHeader" @click="onClick">
      <h4 :class="classes.name">
        {{ folder.name }}
      </h4>
      <img
          :class="[classes.chevron, isActive ? classes.active : '']"
          src="../assets/chevron-right.svg"
          :alt="isActive ? 'скрыть' : 'показать'"
      />
    </div>

    <NoteList v-if="isActive" :notes="folder.notes" />
  </div>
</template>

<script setup lang="ts">
import NoteList from './NoteList.vue'
import type { Folder } from '../types'

defineProps<{
  folder: Folder
  isActive: boolean
}>()
const emit = defineEmits<{
  (e: 'click'): void
}>()

const onClick = () => {
  emit('click')
}
</script>

<style module="classes">
.folderItem {}
.folderItemHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px;
}
.name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.chevron {
  height: 24px;
  width: 24px;
}
.chevron.active {
  transform: rotate(90deg);
}
</style>