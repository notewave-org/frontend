<template>
  <div :class="classes.folderList">
    <FolderItem
        v-for="folder in folders"
        :folder="folder"
        :key="folder.id"
        :is-active="folder.id === activeFolderId"
        @click="onClickFolder(folder.id)"
    />
    <p v-if="folders.length === 0" :class="classes.empty">
      Создайте первую папку
    </p>
  </div>
</template>

<script setup lang="ts">
import FolderItem from './FolderItem.vue'
import type { Folder } from '../types'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  folders: Folder[]
}>()

const route = useRoute()

const activeFolderId = ref<Folder['id'] | null>(null)
const onClickFolder = (folderId: Folder['id']) => {
  if (activeFolderId.value === null || activeFolderId.value !== folderId) {
    activeFolderId.value = folderId
    return
  }
  activeFolderId.value = null
}

watch(() => route.params.noteId, (id) => {
  const noteId = Number(id)
  const folderId = props.folders.find((folder) => {
    return folder.notes.some((note) => note.id === noteId)
  })?.id

  if (folderId) {
    activeFolderId.value = folderId
  }
}, { once: true })
</script>

<style module="classes">
.folderList {}
.empty {}
</style>