<script lang="ts" setup>
	import { ref } from 'vue'
	import { signWithGoogle, signup } from '@/utils/firebase-authentication'
	import { darkTheme } from '@/store/darkTheme'

	const username = ref('')
	const password = ref('')
	const alreadyMember = ref(false)
	const loading = ref(false)

	async function handleForm() {
		loading.value = true
		try {
			await signup(username.value, password.value)
		} catch {
			console.log('Error')
		}
		loading.value = false
	}
</script>

<template>
	<div class="container" :class="darkTheme && 'darkTheme'">
		<h1>Sign Up to create your notes!</h1>

		<form @submit.prevent="handleForm">
			<h2>
				{{ alreadyMember ? 'Login' : 'Register' }}
			</h2>

			<section>
				<div class="box">
					<input
						disabled
						placeholder="future build"
						type="text"
						v-model="username"
					/>
				</div>

				<div class="box">
					<input
						disabled
						placeholder="future build"
						type="password"
						v-model="password"
					/>
				</div>

				<button :disabled="loading" class="google" @click="signWithGoogle">
					Sign in with Google
				</button>
			</section>

			<small @click="alreadyMember = !alreadyMember">{{
				alreadyMember ? 'Create your account' : 'Already a member? Login In'
			}}</small>
		</form>
	</div>
</template>

<style lang="scss" scoped>
	.darkTheme {
		color: $darktheme-color;
		background-color: $darktheme-background;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100%;

		h1 {
			font-size: 3rem;
			font-weight: 100;
			margin-bottom: 2rem;
			margin: 0 1rem;
		}

		form {
			padding: 1rem 2rem;
			margin: 1rem auto;
			width: 100%;
			max-width: 500px;
			border-radius: 30px 1px 30px 30px;

			h2 {
				color: hsl(200, 0%, 50%);
				font-weight: 500;
				margin-left: 1rem;
				text-align: left;
				font-size: 1.3rem;
			}

			section {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				margin: 1rem;

				.box {
					width: 100%;
					position: relative;

					label {
						transition: all 0.3s;
						position: absolute;
						left: 10px;
						top: 5px;
						color: hsl(200, 0%, 55%);
					}

					input {
						position: relative;
						outline: none;
						border: none;
						height: 35px;
						border-radius: 4px 4px 0px 0px;
						padding: 0 1rem;
						width: 100%;
						border-bottom: 1px solid hsl(200, 100%, 80%);

						&:focus {
							border-bottom: 2px solid hsl(200, 100%, 50%);
						}

						&:focus::placeholder {
							top: -20px;
							left: 0;
							color: hsl(200, 100%, 50%);
						}
					}
				}

				.box + .box {
					margin-top: 2rem;
				}

				button {
					cursor: pointer;
					border: none;
					border-radius: 4px;
					height: 40px;
					padding: 0 1rem;
					margin-top: 2rem;
					width: 100%;
					transition: 0.3s;
					font-size: 1rem;
					background-color: hsl(200, 100%, 50%);

					&:hover {
						background-color: hsl(200, 100%, 80%);
						box-shadow: 0px 0px 5px 1px hsl(200, 100%, 80%);
					}
				}

				.google {
					background-color: hsl(0, 100%, 100%);
					border: 1px solid hsl(200, 20%, 50%);
					box-shadow: 1px 1px 5px 1px hsl(0, 50%, 100%);

					&:hover {
						background-color: hsl(0, 0%, 97%);
					}
				}

				button + button {
					margin-top: 1rem;
				}
			}

			small {
				user-select: none;
				cursor: pointer;
				color: hsl(200, 100%, 50%);
			}
		}
	}

	@media screen and (min-width: 640px) {
		/* .container {
			form {
				margin: 1rem 5rem;
			}
		} */
	}
</style>
