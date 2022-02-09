<script lang="ts" setup>
	import { ref } from 'vue'
</script>

<template>
	<input
		type="text"
		@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
	/>
</template>
