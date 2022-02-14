import { ref, watchEffect } from 'vue'
import { auth, provider } from '@/store/firebase'
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	signOut
} from 'firebase/auth'
import router from '@/router'

const user = ref()

function signup(email: string, password: string) {
	return createUserWithEmailAndPassword(auth, email, password)
}

function signWithGoogle() {
	signInWithPopup(auth, provider).then((result) => {
		user.value = result
		router.push('/notes')
	})
}

const signUserOut = () => {
	signOut(auth).then((res) => {
		user.value = null
		router.push('/')
	})
}

/// Is There an user logged in ?
watchEffect(() => {
	const unsubscribe = auth.onAuthStateChanged((userState) => {
		if (userState) {
			user.value = userState
			router.push('/notes')
		}
	})
	return unsubscribe
})

export { signup, signWithGoogle, signUserOut, user }
