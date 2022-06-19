import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBN-6N6rArJ1duchnm-IzNw9oPzJgxG6Ys",
    authDomain: "auth-d765a.firebaseapp.com",
    projectId: "auth-d765a",
    storageBucket: "auth-d765a.appspot.com",
    messagingSenderId: "363476085478",
    appId: "1:363476085478:web:640369318d16def5542927"
})

export const auth = app.auth()
export default app

// process.env.REACT_APP_FIREBASE_API_KEY
// process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
// process.env.REACT_APP_FIREBASE_PROJECT_ID
// process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
// process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
// process.env.REACT_APP_FIREBASE_APP_ID