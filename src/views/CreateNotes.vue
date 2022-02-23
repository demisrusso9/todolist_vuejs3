<script lang="ts" setup>
	import { computed } from 'vue'
	import { useRoute } from 'vue-router'
	import router from '@/router'
	import Button from '@/components/ui/Button.vue'
	import Input from '@/components/ui/Input.vue'
	import Textarea from '@/components/ui/Textarea.vue'
	import { createNote, updateNote } from '@/utils/firebase-document'
	import { clearFields, note } from '@/store/notes'

	const maxlength = computed(() => 400 - note.description.length)

	const route = useRoute()
	const parameterId = computed(() => route.params.id || null)

	function handleForm() {
		// Fields empty ? return
		if (!note.title || !note.description) return

		// Parameter equal null? Create Note
		if (parameterId.value === null) {
			createNote()
			router.push('/notes')
			return
		}
		// Has a parameter ? Edit Note
		else updateNote(parameterId.value as string)

		router.push('/notes')
	}

	function cancelEdit() {
		router.push('/notes')
	}
</script>

<template>
	<form @submit.prevent="handleForm">
		<fieldset>
			<legend>
				{{ !parameterId ? 'Describe your note' : 'Edit your note' }}
			</legend>

			<Input v-model:title="note.title" placeholder="Type your todo here" />
			<small>{{ maxlength }}</small>
			<Textarea v-model:description="note.description" />

			<div>
				<Button
					type="submit"
					:msg="!parameterId ? 'Add' : 'Edit'"
					:class="parameterId && 'edit'"
					:disabled="false"
				/>
				<Button
					v-show="parameterId"
					type="button"
					msg="Cancel"
					:class="parameterId && 'cancel'"
					:disabled="false"
					@click="cancelEdit"
				/>
			</div>
		</fieldset>
	</form>
</template>

<style lang="scss" scoped>
	form {
		height: 100%;
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 2rem;

		fieldset {
			border: 1px solid $border-color;
			border-radius: 15px;
			display: inherit;
			flex-direction: column;
			flex-grow: 1;
			width: 100%;
			height: 100%;
			max-width: 500px;
			padding: 3rem;

			legend {
				border-radius: 30px;
				padding: 1rem;
				text-align: center;
				background-color: $primary-color;
			}

			small {
				margin-left: 1rem;
			}

			div {
				display: flex;

				button + button {
					margin-left: 1rem;
				}
			}
		}
	}

	@media screen and (max-width: 350px) {
		form {
			margin: 1rem;

			fieldset {
				padding: 1rem;
			}
		}
	}
</style>
