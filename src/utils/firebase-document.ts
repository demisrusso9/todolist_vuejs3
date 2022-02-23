import {
	collection,
	addDoc,
	onSnapshot,
	updateDoc,
	deleteDoc,
	doc
} from 'firebase/firestore'
import { db } from './firebase-config'
import router from '@/router'
import { note, state } from '@/store/notes'

const collectionRef = collection(db, 'notes')

// Realtime collection data
onSnapshot(collectionRef, (snapshot) => {
	if (snapshot.docs.length === 0) return (state.notes = [])

	state.notes = snapshot.docs.map((docs) => ({
		id: docs.id,
		title: docs.data().title,
		description: docs.data().description,
		favorite: docs.data().favorite
	}))
})

async function createNote() {
	await addDoc(collectionRef, {
		title: note.title,
		description: note.description,
		favorite: false
	})
}

function openEditNote(id: string) {
	const docRef = doc(db, 'notes', id)

	// Add values to edit
	onSnapshot(docRef, (doc) => {
		note.title = doc.data()?.title
		note.description = doc.data()?.description
	})

	router.push(`/manage/${id}`)
}

async function updateNote(id: string) {
	const docRef = doc(db, 'notes', id)

	await updateDoc(docRef, { ...note })
	router.push(`/notes`)
}

async function markAsFavorite(id: string) {
	const docRef = doc(db, 'notes', id)

	// Get index
	const i = state.notes.findIndex((note) => note.id === id)

	// Toggle favorite true | false
	await updateDoc(docRef, { favorite: !state.notes[i].favorite })

	// Update state
	state.notes.some((note) => {
		if (note.id === id) return { ...note, favorite: !note.favorite }
	})
}

async function deleteNote(id: string) {
	const docRef = doc(db, 'notes', id)
	await deleteDoc(docRef)
}

export { createNote, deleteNote, openEditNote, updateNote, markAsFavorite }
