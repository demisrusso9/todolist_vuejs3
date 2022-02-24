<script lang="ts" setup>
	import { signUserOut, user } from '@/utils/firebase-authentication'
	import MenuIcon from '@/assets/icons/menu.svg'
	import { showMenu } from '@/store/notes'

	const toggleMenu = () => (showMenu.value = !showMenu.value)
</script>

<template>
	<header>
		<nav>
			<router-link to="/dashboard">Notes</router-link>

			<ul v-if="user" :class="showMenu && 'active'">
				<li>
					<router-link to="/dashboard">Dashboard</router-link>
				</li>

				<li>
					<router-link to="/notes">My Notes</router-link>
				</li>

				<li>
					<router-link to="/manage">Create</router-link>
				</li>

				<li>
					<router-link class="log-out" to="/" @click="signUserOut"
						>Log out</router-link
					>
				</li>
			</ul>

			<div v-if="user" class="hamburger">
				<input type="checkbox" id="check" />
				<label for="check">
					<img :src="MenuIcon" alt="Menu Icon" @click="toggleMenu" />
				</label>
			</div>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
	header {
		background-color: black;

		nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: $white;
			border-bottom: 1px solid $primary-color;
			padding: 0 1.2rem;
			min-height: 70px;

			> a {
				cursor: pointer;
				text-decoration: none;
				font-size: 2rem;
				font-weight: 400;
				letter-spacing: 0.3rem;
				transition: all 0.2s;
				color: $primary-color;

				&:hover {
					transform: scale(1.1);
				}
			}

			ul {
				display: flex;
				justify-content: space-between;
				align-items: center;
				list-style: none;

				li a {
					padding: 0.5rem 0.8rem;
					text-decoration: none;
					color: $primary-color;
					text-transform: uppercase;
					font-size: 0.8rem;
					letter-spacing: 2px;
					transition: 0.3s;

					&:hover {
						color: $light-primary-color;
						background-color: $semi-white;
						border-radius: 5px;
					}
				}

				.log-out {
					color: $red-color;
				}
			}
		}

		.hamburger {
			display: none;

			width: 40px;
			height: 40px;

			input {
				display: none;
			}
		}
	}

	@media screen and (max-width: 530px) {
		header {
			ul {
				position: fixed;
				top: 70px;
				right: 100%;
				flex-direction: column;

				width: 100%;
				padding: 2rem 0rem;
				gap: 30px;

				text-align: center;
				border: 1px solid $primary-color;
				border-top: none;
				background-color: $white;

				transition: 0.3s;
				z-index: 3;
			}

			ul.active {
				right: 0;

				li a {
					font-size: 1rem;
					text-transform: none;
					font-weight: bold;
				}
			}

			.hamburger {
				display: block;
				z-index: 10;

				img {
					z-index: -1;
					cursor: pointer;
				}
			}
		}
	}
</style>
