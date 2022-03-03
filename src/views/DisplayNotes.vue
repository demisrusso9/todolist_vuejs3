<script lang="ts" setup>
	import Note from '@/components/Note.vue'
	import { state, search } from '@/store/notes'
	import { darkTheme } from '@/store/darkTheme'
	import Input from '@/components/ui/Input.vue'
	import RemoveSearch from '@/assets/icons/search.svg'

	function searchNotes(value: string) {
		if (!value) return state.notes

		const text = value.toLowerCase()

		// Search by both title and description
		return state.notes.filter((note) => {
			return (
				note.title.toLowerCase().includes(text) ||
				note.description.toLowerCase().includes(text)
			)
		})
	}
</script>

<template>
	<section :class="darkTheme && 'darkTheme'">
		<div class="search">
			<img :src="RemoveSearch" alt="Search" />

			<Input v-model="search" placeholder="Search..." />
		</div>

		<Note v-for="note in searchNotes(search)" :key="note.id" :note="note" />
	</section>
</template>

<style lang="scss" scoped>
	section {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		align-items: center;
		padding: 2rem 0;

		.search {
			display: flex;
			align-items: center;
			position: relative;

			img {
				position: absolute;
				right: 10px;
				width: 30px;
				height: 30px;
			}

			input {
				width: auto;
				padding: 0.6rem 3rem 0.6rem 2rem;
				border-radius: 30px;
				border: 1px solid $border-color;
				outline: none;
				transition: 0.3s;

				&:focus {
					border: 2px solid $primary-color;
				}
			}
		}
	}

	.darkTheme {
		color: $darktheme-color;
		background-color: $darktheme-background;
	}

	@media screen and (max-width: 600px) {
		section {
			margin: 1rem;
		}
	}
</style>
