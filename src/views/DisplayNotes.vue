<script lang="ts" setup>
	import Note from '@/components/Note.vue'
	import { state } from '@/store/notes'
</script>

<template>
	<section>
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
