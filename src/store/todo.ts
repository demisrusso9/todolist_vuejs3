import { ref, reactive } from 'vue'
import { TypeTodos } from '@/types/typeTodos'

// Properties

const list = ref([] as TypeTodos[])
const todo = ref('')
const search = ref('')

const edit = reactive({
	id: -1,
	name: '',
	isActive: false
})

export { list, todo, search, edit }
