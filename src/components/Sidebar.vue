<template>
  <aside :class="classes.sidebar">
    <h2 :class="classes.productName">
      NoteWave
    </h2>

    <div :class="classes.folders">
      Папки
    </div>

    <div :class="classes.user">
      <p :class="classes.userName">
        Имя Фамилия
      </p>
    </div>
  </aside>
</template>

<style module="classes">
.sidebar {
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 16px;
  padding: 16px;
  background: #1e1e1e;
  overflow-y: auto;
}

.productName {
  text-align: center;
}

.folders {
  overflow-y: auto;
}

.user {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  border: 1px solid #333333;
  height: 64px;
}

.userName {}

@media (prefers-color-scheme: light) {
  .sidebar {
    background: #ededed;
  }
  .user {
    border-color: #cccccc;
  }
}
</style>