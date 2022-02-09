<script lang="ts" setup>
	import { todo, search, edit, list } from '@/store/todo'
	import { toggleDarkMode } from '@/store/darkTheme'
	import Button from '../ui/Button/Button.vue'
	import ButtonIcon from '../ui/Button/ButtonIcon.vue'
	import Input from '../ui/Input/Input.vue'
	import { TypeTodos } from '@/types/typeTodos'
	import Icon from '../ui/Icon/Icon.vue'
	import ContrastIcon from '@/assets/icons/contrast.svg'

	function addTodo(text: string) {
		if (!text) return

		const data: TypeTodos = {
			id: list.value.length,
			name: text,
			status: false
		}

		list.value.unshift(data)
		todo.value = ''
		search.value = ''
	}

	function editTodo(text: string) {
		list.value.map((todo, i) => {
			if (todo.id === edit.id) {
				list.value[i] = { ...todo, name: text }
			}
		})

		edit.name = ''
		edit.isActive = false
	}

	function handleForm() {
		if (edit.isActive) return editTodo(edit.name)

		return addTodo(todo.value)
	}
</script>

<template>
	<div>
		<form @submit.prevent="handleForm">
			<div>
				<Input
					v-if="!edit.isActive"
					v-model="todo"
					placeholder="Type your todo here"
				/>

				<Input v-else v-model="edit.name" placeholder="Edit your todo here" />

				<Button
					type="submit"
					:msg="edit.isActive ? 'Edit' : 'Add'"
					:class="edit.isActive ? 'bg-blue-400' : 'bg-purple-400'"
					:disabled="false"
				/>

				<ButtonIcon>
					<Icon :src="ContrastIcon" @click="toggleDarkMode()" />
				</ButtonIcon>

				<ButtonIcon>
					<Icon :src="ContrastIcon" @click="toggleDarkMode()" />
				</ButtonIcon>
			</div>

			<Input placeholder="Search" v-model="search" />
		</form>
	</div>
</template>
