<script lang="ts" setup>
	import { ref, reactive } from 'vue'
	import router from '@/router'
	import { signOut } from 'firebase/auth'
	import { auth } from '@/store/authentication'
	import { isAuthenticated } from '@/store/authentication'

	const signUserOut = () => {
		signOut(auth).then((res) => {
			localStorage.clear()
			router.push('/')
			isAuthenticated.value = false
		})
	}
</script>

<template>
	<header>
		<h1>Notes</h1>

		<section>
			<a v-if="!isAuthenticated" href="/">Sign Up</a>
			<a v-else @click="signUserOut" href="/">Log out</a>
		</section>
	</header>

	<router-view />
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
			color: hsl(200, 100%, 50%);
			transition: all 0.2s;

			&:hover {
				transform: scale(1.1);
			}
		}

		section {
			display: flex;

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
