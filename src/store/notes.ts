import { NotesProps } from '@/types/notes'
import { ref, reactive } from 'vue'

// Properties
const search = ref('')

const state = reactive({
	notes: [] as NotesProps[]
})

const note = reactive({
	title: '',
	description: ''
})

const clearFields = () => {
	note.title = ''
	note.description = ''
}

export { state, note, search, clearFields }
