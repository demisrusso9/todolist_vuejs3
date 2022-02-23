import { ref, reactive } from 'vue'

// Properties
const search = ref('')

const note = reactive({
	title: '',
	description: ''
})

const clearFields = () => {
	note.title = ''
	note.description = ''
}

export { note, search, clearFields }
