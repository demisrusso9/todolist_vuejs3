<script lang="ts" setup>
	import TodoForm from './components/Form/TodoForm.vue'
	import TodoList from './components/FormList/TodoList.vue'
	import { darkTheme } from '@/store/darkTheme'
</script>

<template>
	<div>
		<TodoForm />
		<TodoList />
	</div>
</template>
