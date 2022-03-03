<script lang="ts" setup>
	import { state } from '@/store/notes'
	import { openEditNote } from '@/utils/firebase-document'
	import { darkTheme, toggleDarkMode } from '@/store/darkTheme'

	function seeFavoriteNotes() {
		return state.notes.filter((note) => note.favorite)
	}
</script>

<template>
	<div class="grid" :class="darkTheme && 'darkTheme'">
		<section class="create">
			<router-link to="/manage">
				<p>Create</p>
			</router-link>
		</section>

		<section class="list">
			<router-link to="/notes">
				<p>My Notes</p>
			</router-link>
		</section>

		<section class="total-notes">
			<p>{{ state.notes.length }}</p>
			<small>notes created</small>
		</section>

		<section class="total-favorites">
			<p>{{ state.notes.filter((note) => note.favorite).length }}</p>
			<small>favorites notes</small>
		</section>

		<section class="favorite">
			<p v-show="seeFavoriteNotes().length">Favorite Notes</p>

			<small v-show="seeFavoriteNotes().length === 0"
				>No favorite notes to show here!</small
			>
			<div
				v-for="note in seeFavoriteNotes().slice(0, 3)"
				:key="note.id"
				@click="openEditNote(note.id)"
			>
				<span>{{ note.title }}</span>
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		width: auto;
		height: 100%;
		padding: 1.5rem;
		gap: 4rem;

		section {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border-radius: 10px;
			padding: 1rem;
			border: 1px solid $border-color;
			box-shadow: 0px 13px 7px -16px $shadow-color;

			transition: all 0.3s;

			a p {
				color: $primary-color;
			}

			a {
				text-align: center;
				margin: 0 auto;
				text-decoration: none;
			}

			p {
				font-weight: bold;
				font-size: 1.8rem;
				color: hsl(200, 100%, 50%);
			}

			&:hover {
				transform: scale(1.03);
			}
		}
		.total-notes,
		.total-favorites {
			p {
				color: $primary-color;
			}
		}
		.favorite {
			grid-column: 3;
			grid-row: 1 / 3;

			padding: 0.8rem 0;

			p {
				color: $primary-color;
				margin-bottom: 1rem;
			}

			div {
				border-radius: 10px;
				border: 1px solid hsl(160, 0%, 85%);
				padding: 0.5rem 2rem;
				cursor: pointer;
				transition: 0.3s;

				&:hover {
					background-color: $primary-color;
					color: white;
				}
			}

			div + div {
				margin-top: 0.8rem;
			}
		}
	}

	.darkTheme {
		color: $darktheme-color;
		background-color: $darktheme-background;
	}

	@media screen and (min-width: 1550px) {
		.grid {
			grid-template-columns: 1fr 1fr 2fr;
			grid-template-rows: repeat(3, 1fr);

			gap: 2rem;
			padding: 4rem;
			min-width: 800px;
			text-align: center;
		}
	}

	@media screen and (max-width: 1550px) {
		.grid {
			grid-template-columns: 1fr 1fr 3fr;
			grid-template-rows: repeat(2, 1fr);

			gap: 2rem;
			padding: 4rem;
			text-align: center;
		}
	}

	@media screen and (max-width: 770px) {
		.grid {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;

			gap: 2rem;
			padding: 2rem;

			.create {
				grid-column: 1 / 2;
				grid-row: 1;
			}
			.list {
				grid-column: 2 / 3;
				grid-row: 1;
			}
			.favorite {
				grid-column: 1 / 3;
				grid-row: 3;
			}
		}
	}

	@media screen and (max-width: 470px) {
		.grid {
			grid-template-columns: 1fr 1fr;
			gap: 1.3rem;
			padding: 2rem;

			section {
				flex: 1;
			}
		}
	}
</style>
