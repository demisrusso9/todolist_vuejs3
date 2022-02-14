<script lang="ts" setup>
	import Header from '@/components/Header.vue'
</script>

<template>
	<Header />

	<main class="main">
		<router-view />
	</main>
</template>

<style scoped lang="scss">
	.main {
		min-height: 100vh;
	}
</style>
