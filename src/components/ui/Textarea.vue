<script lang="ts" setup>
	import { defineProps } from 'vue'

	defineProps({
		description: String
	})
</script>

<template>
	<textarea
		placeholder="Description"
		:value="description"
		@input="e => $emit('update:description', (e.target as HTMLTextAreaElement).value)"
	/>
</template>

<style lang="scss" scoped>
	textarea {
		outline: none;
		resize: none;
		height: 100%;
		padding: 0 1rem;
		margin: 0.3rem 0rem 1.2rem;
		border: none;
		transition: all 0.3s;
		line-height: 1.8;
		border-bottom: 2px solid hsl(200, 10%, 50%);

		&:focus {
			border-bottom: 2px solid hsl(200, 100%, 50%);
		}
	}
</style>
