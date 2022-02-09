<script lang="ts" setup>
	import { defineProps } from 'vue'
	import { edit } from '@/store/todo'
</script>

<template>
	<button :disabled="edit.isActive">
		<slot />
	</button>
</template>
