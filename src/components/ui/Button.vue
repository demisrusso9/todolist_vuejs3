<template>
  <button
    class="text-sm rounded-md shadow-lg cursor-pointer p-2 w-20 text-white transition-all hover:opacity-70 disabled:"
    :class="subClass"
    :disabled="edit.isActive"
  >
    {{ msg }}
  </button>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue'
  import { todoName } from '@/store/todo'
  import { edit } from '@/store/todo'

  defineProps({
    msg: String,
    subClass: String
  })
</script>
