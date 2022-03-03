<script lang="ts" setup>
	import { defineProps, ref, watch } from 'vue'
	import Button from '@/components/ui/Button.vue'
	import FavoriteIcon from '@/assets/icons/favorite.svg'
	import EditIcon from '@/assets/icons/edit.svg'
	import RemoveIcon from '@/assets/icons/remove.svg'
	import { NotesProps } from '@/types/notes'
	import {
		markAsFavorite,
		openEditNote,
		deleteNote
	} from '@/utils/firebase-document'
	import { search } from '@/store/notes'
	import { darkTheme } from '@/store/darkTheme'

	defineProps<{
		note: NotesProps
	}>()

	const showDescription = ref(false)

	const getDescription = () => {
		showDescription.value = !showDescription.value
	}

	watch(
		() => search.value.length > 0,
		() => {
			showDescription.value = true
		}
	)
</script>

<template>
	<div class="note" :class="note.favorite && 'favorite'">
		<img v-show="note.favorite" :src="FavoriteIcon" />

		<section class="details">
			<h1 @click="getDescription">{{ note.title }}</h1>

			<p @click="getDescription" v-show="showDescription">
				{{ note.description }}
			</p>
		</section>

		<section class="options" :class="darkTheme && 'darkTheme'">
			<button @click="markAsFavorite(note.id)">
				<img :src="FavoriteIcon" />
			</button>

			<button @click="openEditNote(note.id)">
				<img :src="EditIcon" />
			</button>

			<button @click="deleteNote(note.id)">
				<img :src="RemoveIcon" />
			</button>
		</section>
	</div>
</template>

<style lang="scss" scoped>
	.favorite {
		border-right: 5px solid $favorite-color !important;
		position: relative;

		& > img {
			position: absolute;
			width: 15px;
			height: 15px;
			top: 10px;
			right: 10px;
		}
	}
	.darkTheme {
		color: $darktheme-color;
		background-color: $darktheme-background;
	}
	.note {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding: 1rem 3.5rem;
		width: 100%;
		max-width: 550px;
		margin: 1rem;

		border-radius: 4px;

		border: 1px solid $border-color;
		border-right: 5px solid $border-color;
		box-shadow: 0 8px 5px -10px $shadow-color;

		position: relative;

		.details {
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			user-select: none;
			cursor: pointer;

			h1 {
				margin-bottom: 1.5rem;
			}

			p {
				overflow-wrap: break-word;
				max-width: 450px;
				animation: append-animate 0.3s linear;
				margin-bottom: 2.5rem;
			}
		}

		.options {
			position: absolute;
			bottom: 0px;
			right: 0px;

			/* box-shadow: 0 0px 5px -3px $shadow-color; */

			button {
				font-size: 0;
				border: none;

				background-color: transparent;
				padding: 0.7rem;
				cursor: pointer;
				transition: 0.3s;

				img {
					width: 20px;
					height: 20px;
				}

				&:nth-child(1):hover {
					background-color: $semi-white;
				}

				&:nth-child(2):hover {
					background-color: $semi-white;
				}

				&:nth-child(3):hover {
					background-color: $semi-white;
				}
			}
		}
	}

	.note + .note {
		margin-top: 2.2rem;
	}

	@keyframes append-animate {
		from {
			transform: scale(0);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
