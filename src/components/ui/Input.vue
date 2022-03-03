<script lang="ts" setup>
	import { darkTheme } from '@/store/darkTheme'
</script>

<template>
	<input
		type="text"
		:class="darkTheme && 'darkTheme'"
		@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
	/>
</template>

<style lang="scss" scoped>
	input {
		outline: none;
		padding: 0.5rem 1rem;
		margin: 1rem 0rem;
		border: none;
		transition: all 0.3s;
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
