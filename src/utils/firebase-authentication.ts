import { ref, watchEffect } from 'vue'
import { auth, provider } from '@/utils/firebase-config'
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
		router.push('/dashboard')
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
	auth.onAuthStateChanged((userState) => {
		if (userState) {
			user.value = userState
			router.push('/dashboard')
		}
	})
})
export { signup, signWithGoogle, signUserOut, user }
