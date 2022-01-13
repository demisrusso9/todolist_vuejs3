<template>
  <div class="flex flex-1 h-full" :class="darkTheme ? 'dark' : ''">
    <div class="flex-1 bg-gray-200 dark:bg-darkMode2">
      <div class="flex-1 justify-center items-center m-10">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import TodoForm from './components/TodoForm.vue'
  import TodoList from './components/TodoList.vue'
  import { darkTheme } from '@/store/todo'
</script>
