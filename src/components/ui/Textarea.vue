<script lang="ts" setup>
	import { defineProps } from 'vue'
	import { darkTheme } from '@/store/darkTheme'

	defineProps({
		description: String
	})
</script>

<template>
	<textarea
		placeholder="Description"
		:value="description"
		:class="darkTheme && 'darkTheme'"
		@input="e => $emit('update:description', (e.target as HTMLTextAreaElement).value)"
	/>
</template>

<style lang="scss" scoped>
	textarea {
		outline: none;
		resize: none;
		height: 100%;
		padding: 0.65rem 1rem;
		margin: 0.3rem 0rem 1.2rem;
		border: none;
		border-radius: 2px;
		transition: all 0.3s;
		line-height: 1.8;

		border-bottom: 2px solid $border-color;

		&:focus {
			border-bottom: 3px solid $light-primary-color;
		}
	}

	.darkTheme {
		color: $darktheme-color;
		background-color: $darktheme-background;
	}
</style>
