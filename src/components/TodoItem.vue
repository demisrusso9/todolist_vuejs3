<script lang="ts" setup>
  import { defineProps } from 'vue'
  import { completeTodo, enableEdit, deleteTodo } from '@/store/todo'
  import { TodosProps } from '@/types/todos'
  import Button from './ui/Button.vue'

  defineProps<{
    todo: TodosProps
  }>()
</script>

<template>
  <p>{{ todo.name }}</p>

  <div class="flex items-center gap-2">
    <!-- Ternary Icons -->
    <img
      v-show="todo.status"
      class="h-6 w-6 mr-4"
      src="../assets/icons/checked.png"
      alt="Log"
    />
    <img
      v-show="!todo.status"
      class="h-6 w-6 mr-4"
      src="../assets/icons/warning.png"
      alt="Log"
    />

    <Button msg="Complete" sub-class="bg-green-400" @click="completeTodo(todo.id)" />
    <Button
      msg="Edit"
      sub-class="bg-blue-400"
      @click="!todo.status && enableEdit(todo.id)"
    />
    <Button msg="Delete" sub-class="bg-red-400" @click="deleteTodo(todo.id)" />
  </div>
</template>
