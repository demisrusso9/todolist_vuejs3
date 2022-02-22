<script lang="ts" setup>
	import { defineProps } from 'vue'
	import { edit } from '@/store/notes'
</script>

<template>
	<button :disabled="edit.isActive">
		<slot />
	</button>
</template>
