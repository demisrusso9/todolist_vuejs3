<script lang="ts" setup>
	import { signUserOut, user } from '@/store/auth'
</script>

<template>
	<header>
		<h1><router-link to="/dashboard">Notes</router-link></h1>

		<section v-if="user">
			<router-link to="/dashboard">Dashboard</router-link>
			<router-link to="/notes">Notes</router-link>
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

		width: 100%;
		background-color: hsl(168, 0%, 97%);
		border-bottom: 1px solid hsl(200, 100%, 50%);

		padding: 1rem 2rem;
		margin-bottom: 1rem;
		height: 70px;

		h1 {
			font-size: 2rem;
			font-weight: 400;
			letter-spacing: 0.3rem;
			transition: all 0.2s;

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
				margin-left: 1rem;
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

	@media screen and (max-width: 375px) {
		header {
			display: grid;
			grid-template-columns: 1fr;
			justify-items: center;
			height: 90px;

			section {
				text-align: center;
				width: 100%;

				a {
					width: inherit;
				}
			}
		}
	}
</style>
