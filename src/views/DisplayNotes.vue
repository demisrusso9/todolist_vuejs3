<script lang="ts" setup>
	import { state, createNoteTest } from '@/utils/firebase-document'
	import { search } from '@/store/notes'
	import Note from '@/components/Note.vue'
	import { watch } from 'vue'
</script>

<template>
	<section>
		<button @click="createNoteTest">CREATE</button>
		<Note v-for="note in state.notes" :key="note.id" :note="note" />
	</section>
</template>

<style lang="scss" scoped>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem 0;
	}

	@media screen and (max-width: 600px) {
		section {
			margin: 1rem;
		}
	}
</style>
