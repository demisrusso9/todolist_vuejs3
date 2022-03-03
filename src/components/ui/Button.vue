<script lang="ts" setup>
	import { defineProps } from 'vue'

	defineProps<{
		msg: string
	}>()
</script>

<template>
	<button>
		{{ msg }}
	</button>
</template>

<style lang="scss" scoped>
	button {
		width: 100%;
		height: 40px;
		color: black;
		border: none;
		border-radius: 10px;
		background-color: $primary-color;
		color: $white;

		transition: 0.3s;
		box-shadow: 0px 7px 8px -10px $shadow-color;
		cursor: pointer;

		&:hover {
			background-color: $light-primary-color;
		}
	}

	.edit {
		background-color: $primary-color;

		&:hover {
			background-color: $light-primary-color;
		}
	}
	.cancel {
		background-color: $red-color;

		&:hover {
			background-color: $light-red-color;
		}
	}
</style>
