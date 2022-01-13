<script lang="ts" setup>
  import { addTodo, editTodo, toggleDarkMode, todoName, search, edit } from '@/store/todo'
  import Button from './ui/Button.vue'
</script>

<template>
  <form
    @submit.prevent="edit.isActive ? editTodo(edit.name) : addTodo(todoName)"
    class="flex flex-col justify-center items-center xs:w-1/2 lg:w-2/3 mx-auto my-8 gap-4"
  >
    <div class="flex justify-center">
      <input
        type="text"
        class="border-2 rounded-lg shadow-md w-full p-3 mr-2 dark:bg-darkMode1 dark:text-white"
        placeholder="Type your todo here"
        v-show="!edit.isActive"
        v-model="todoName"
      />

      <input
        type="text"
        class="border-2 rounded-sm w-full p-3 mr-2 dark:bg-darkMode1 dark:text-white"
        placeholder="Edit your todo here"
        v-show="edit.isActive"
        v-model="edit.name"
      />

      <Button
        type="submit"
        :msg="edit.isActive ? 'Edit' : 'Add'"
        :sub-class="edit.isActive ? 'bg-blue-400' : 'bg-purple-400'"
        :disabled="false"
      />

      <Button class="ml-4 bg-gray-600" msg="Dark" @click="toggleDarkMode()" />
    </div>

    <input
      type="text"
      class="border-2 rounded-lg shadow-md w-full p-3 dark:bg-darkMode1 dark:text-white"
      placeholder="Search"
      v-model="search"
    />
  </form>
</template>
