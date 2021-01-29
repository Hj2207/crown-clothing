import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAPW0fXtQJzzUG-9QudepkL-xKDte_ahHw",
    authDomain: "crwn-db-75ac3.firebaseapp.com",
    projectId: "crwn-db-75ac3",
    storageBucket: "crwn-db-75ac3.appspot.com",
    messagingSenderId: "49237870657",
    appId: "1:49237870657:web:f56490c9c24b0d08635ec0"
  };
  firebase.initializeApp(config);
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    console.log('additionalData---', additionalData)
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    const userRef= firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get()
    if(!snapshot.exists) {
      try{
        userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error in creating document',error)
      }
     
    }
      return userRef;
  };

 
  export const auth = firebase.auth();
  export const firestore= firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'prompt': 'select_account'
  });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;