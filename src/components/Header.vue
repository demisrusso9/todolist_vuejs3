<script lang="ts" setup>
	import { signUserOut, user } from '@/utils/firebase-authentication'
</script>

<template>
	<header>
		<h1>
			<router-link v-if="user" to="/dashboard">Notes</router-link>
		</h1>

		<section v-if="user">
			<router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
			<router-link to="/notes">My Notes</router-link>
			<router-link to="/manage">Create</router-link>
			<hr />
			<router-link class="log-out" to="/" @click="signUserOut"
				>Log out</router-link
			>
		</section>
	</header>
</template>

<style lang="scss" scoped>
	header {
		user-select: none;
		display: flex;
		justify-content: space-between;
		align-items: center;

		background-color: hsl(168, 0%, 97%);
		border-bottom: 1px solid hsl(200, 100%, 50%);

		padding: 1rem 2rem;

		max-height: 70px;

		h1 {
			font-size: 2rem;
			font-weight: 400;
			letter-spacing: 0.3rem;
			transition: all 0.2s;
			cursor: pointer;

			a {
				color: hsl(200, 100%, 50%);
				cursor: pointer;
				text-decoration: none;
			}

			&:hover {
				transform: scale(1.1);
			}
		}

		section {
			display: flex;
			align-items: center;

			a {
				text-decoration: none;
				/* padding: 0 0.5rem; */
				font-size: 1rem;
				transition: all 0.2s;
				color: hsl(200, 100%, 45%);

				&:hover {
					color: hsl(200, 100%, 50%);
					transform: scale(1.15);
				}
			}

			a + a {
				margin-left: 2rem;
			}

			hr {
				display: flex;
				height: 25px;
				margin: 0 1rem;
				border: none;
				border-radius: 30px;
				border-left: 2px solid hsl(0, 0%, 85%);
			}

			.log-out {
				color: hsl(0, 100%, 45%);

				&:hover {
					color: hsl(0, 100%, 45%);
					transform: scale(1.15);
				}
			}
		}
	}

	@media screen and (max-width: 500px) {
		header {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			justify-items: center;
			align-items: center;
			max-height: 100px;

			h1 {
				margin-bottom: 0.5rem;
			}

			section {
				margin: 0 auto;
				text-align: center;
			}
		}
	}
</style>
