import * as firebase from 'firebase/firebase'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "mytodolist-54321",
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Google Auth
const googleProvider = new firebase.auth.GoogleAuthProvider();

// const signInWithGoogle = async () => {
//     try {
//         const res = await auth.signInWithPopup(googleProvider);
//         const user = res.user;
//         const query = await db
//             .collection("users")
//             .where("uid", "==", user.uid)
//             .get();
//         if (query.docs.length === 0) {
//             await db.collection("users").add({
//                 uid: user.uid,
//                 name: user.displayName,
//                 authProvider: "google",
//                 email: user.email,
//             });
//         }
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };

// Email auth
const signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Storage
const projectStorage = firebase.storage();
// Initialize Firestore
const projectFirestore = firebase.firestore();
//create Firebase server timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
// Initialize Authentication
const auth = firebase.auth();

export { projectStorage, projectFirestore, timestamp, auth };