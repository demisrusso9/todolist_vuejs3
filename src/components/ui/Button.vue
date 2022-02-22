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
		background-color: hsl(200, 100%, 50%);
		color: hsl(200, 0%, 100%);

		transition: 0.3s;
		box-shadow: 0px 12px 8px -10px hsl(200, 0%, 60%);
		cursor: pointer;

		&:hover {
			background-color: hsl(200, 100%, 60%);
		}
	}

	.edit {
		background-color: lightblue;

		&:hover {
			background-color: lightblue;
		}
	}
	.cancel {
		background-color: red;

		&:hover {
			background-color: hsl(0, 100%, 80%);
		}
	}
</style>
