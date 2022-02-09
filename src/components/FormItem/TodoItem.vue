<script lang="ts" setup>
	import { defineProps } from 'vue'
	import { list, edit } from '@/store/todo'
	import { TypeTodos } from '@/types/typeTodos'
	import Button from '../ui/Button/Button.vue'
	import ButtonIcon from '../ui/Button/ButtonIcon.vue'
	import Icon from '../ui/Icon/Icon.vue'
	import CheckedIcon from '@/assets/icons/checked.svg'
	import WarningIcon from '@/assets/icons/warning.svg'
	import DoneIcon from '@/assets/icons/done.svg'
	import EditIcon from '@/assets/icons/edit.svg'
	import RemoveIcon from '@/assets/icons/remove.svg'

	defineProps<{
		todo: TypeTodos
	}>()

	function enableEdit(id: number) {
		edit.isActive = true
		edit.id = id
	}

	function completeTodo(id: number) {
		list.value.map((todo, i) => {
			if (todo.id === id) {
				list.value[i] = { ...todo, status: true }
			}
		})
	}

	function deleteTodo(id: number) {
		const idx = list.value.map((todo) => todo.id).indexOf(id)
		list.value.splice(idx, 1)
	}
</script>

<template>
	<p>{{ todo.name }}</p>

	<div>
		<!-- Ternary Icons -->

		<div>
			<Icon v-show="todo.status" :src="CheckedIcon" />
			<Icon v-show="!todo.status" :src="WarningIcon" />
		</div>

		<ButtonIcon @click="completeTodo(todo.id)">
			<Icon :src="DoneIcon" />
		</ButtonIcon>

		<ButtonIcon @click="!todo.status && enableEdit(todo.id)">
			<Icon :src="EditIcon" />
		</ButtonIcon>

		<ButtonIcon @click="deleteTodo(todo.id)">
			<Icon :src="RemoveIcon" />
		</ButtonIcon>
	</div>
</template>
