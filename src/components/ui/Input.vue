<script lang="ts" setup>
	import { ref, defineProps } from 'vue'

	defineProps({
		title: String
	})
</script>

<template>
	<input
		type="text"
		:value="title"
		@input="$emit('update:title', ($event.target as HTMLInputElement).value)"
	/>
</template>

<style lang="scss" scoped>
	input {
		outline: none;
		padding: 0.5rem 1rem;
		margin: 1rem 0rem;
		border: none;
		transition: all 0.3s;
		border-bottom: 2px solid hsl(200, 10%, 50%);

		&:focus {
			border-bottom: 2px solid hsl(200, 100%, 50%);
		}
	}
</style>
