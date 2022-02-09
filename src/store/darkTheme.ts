import { ref } from 'vue'

const darkTheme = ref(false)

function toggleDarkMode() {
	return (darkTheme.value = !darkTheme.value)
}

export { darkTheme, toggleDarkMode }
