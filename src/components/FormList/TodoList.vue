<script lang="ts" setup>
	import { search, list } from '@/store/todo'
	import TodoItem from '../FormItem/TodoItem.vue'

	function searchTodo(text: string) {
		const value = text.toLowerCase()
		return list.value.filter((todo) => todo.name.toLowerCase().match(value))
	}
</script>

<template>
	<!-- List Todos -->
	<div>
		<section v-for="todo in searchTodo(search)" :key="todo.id">
			<TodoItem :todo="todo" />
		</section>
	</div>
</template>
