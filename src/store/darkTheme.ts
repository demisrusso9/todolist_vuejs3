import { ref } from 'vue'

const darkTheme = ref(true)

function toggleDarkMode() {
	return (darkTheme.value = !darkTheme.value)
}

export { darkTheme, toggleDarkMode }
