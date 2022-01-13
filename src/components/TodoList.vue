<script lang="ts" setup>
  import { searchTodo, search } from '@/store/todo'
  import TodoItem from './TodoItem.vue'
</script>

<template>
  <!-- List Todos -->
  <div class="flex flex-col justify-center items-center xs:w-1/2 lg:w-2/3 gap-5 mx-auto">
    <section
      v-for="todo in searchTodo(search)"
      :key="todo.id"
      class="w-full p-2 flex items-center justify-between rounded-md shadow-xl bg-white hover:bg-gray-100 transition-colors cursor-pointer dark:bg-darkMode1 dark:text-gray-200"
    >
      <TodoItem :todo="todo" />
    </section>
  </div>
</template>
