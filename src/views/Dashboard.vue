<script lang="ts" setup>
	import { state } from '@/store/notes'
</script>

<template>
	<div class="grid">
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
			<a href="#">
				<p>Favorite Notes</p>
			</a>
		</section>
	</div>
</template>

<style lang="scss" scoped>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 2fr;
		grid-template-rows: 1fr 1fr;
		width: auto;
		height: 100%;
		padding: 1.5rem;
		gap: 4rem;
		margin: 5rem 4rem;

		section {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border-radius: 10px;
			border: 1px solid hsl(200, 0%, 85%);
			box-shadow: 0px 20px 7px -16px hsl(200, 0%, 85%);

			transition: all 0.3s;

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
				color: hsl(160, 80%, 50%);
			}
		}

		.favorite {
			grid-column: 3;
			grid-row: 1 / 3;
			display: flex;
			flex-direction: column;
		}
	}

	@media screen and (min-width: 1550px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(3, 1fr);

			gap: 2rem;
		}
	}

	@media screen and (max-width: 770px) {
		.grid {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr 1fr;

			gap: 2rem;

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
			display: flex;
			flex-direction: column;
			margin: 1rem 0;

			section {
				flex: 1;
			}
		}
	}
</style>
