import { ref, reactive } from 'vue'
import { TodosProps } from '@/types/todos'

// Properties

const todos = ref([] as TodosProps[])
const todoName = ref('')
const search = ref('')
const edit = reactive({
  id: -1,
  name: '',
  isActive: false
})

const darkTheme = ref(true)

// Methods

function addTodo(text: string) {
  if (!text) return

  const data: TodosProps = {
    id: todos.value.length,
    name: text,
    status: false
  }

  todos.value.unshift(data)
  todoName.value = ''
  search.value = ''

  // saveToLocalStorage()
}

function enableEdit(id: number) {
  edit.id = id
  edit.isActive = true
}

function editTodo(text: string) {
  todos.value.map((todo, i) => {
    if (todo.id === edit.id) {
      todos.value[i] = { ...todo, name: text }
    }
  })

  // clear input and disables edit input
  edit.name = ''
  edit.isActive = false

  // saveToLocalStorage()
}

function completeTodo(id: number) {
  todos.value.map((todo, i) => {
    if (todo.id === id) {
      todos.value[i] = { ...todo, status: true }
    }
  })

  // saveToLocalStorage()
}

function deleteTodo(id: number) {
  const idx = todos.value.map((todo) => todo.id).indexOf(id)
  todos.value.splice(idx, 1)
}

function searchTodo(text: string) {
  const value = text.toLowerCase()
  return todos.value.filter((todo) => todo.name.toLowerCase().match(value))
}

function toggleDarkMode() {
  return (darkTheme.value = !darkTheme.value)
}

// // function saveToLocalStorage() {
//   localStorage.setItem('todos', JSON.stringify(todos))
// }

// function getFromLocalStorage() {
//   return JSON.parse(localStorage.getItem('todos')!) || ([] as TodosProps[])
// }

export {
  todos,
  todoName,
  search,
  edit,
  darkTheme,
  addTodo,
  enableEdit,
  editTodo,
  completeTodo,
  deleteTodo,
  searchTodo,
  toggleDarkMode
}
