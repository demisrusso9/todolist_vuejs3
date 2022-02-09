<script lang="ts" setup>
	import { defineProps } from 'vue'
	import { edit } from '@/store/todo'

	defineProps<{
		msg: string
	}>()
</script>

<template>
	<button :disabled="edit.isActive">
		{{ msg }}
	</button>
</template>
