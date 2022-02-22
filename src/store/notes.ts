import { ref, reactive } from 'vue'
import { NotesProps } from '@/types/notes'

// Properties

const search = ref('')

const note = reactive({
	title: '',
	description: ''
})

export { note, search }
