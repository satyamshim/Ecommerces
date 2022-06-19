import { async } from '@firebase/util';
import {initializeApp} from 'firebase/app';
import {
	getAuth, 
	signInWithRedirect,
    signInWithPopup, 
	GoogleAuthProvider
} from 'firebase/auth';

import {
	getFirestore,
	doc,
	getDoc,
	setDoc
} from 'firebase/firestore'


const firebaseConfig = {
	apiKey: "AIzaSyAAl2_gEpGL207n1Txi6e9tnPTJk1-PBCA",
	authDomain: "raj-clothing-db.firebaseapp.com",
	projectId: "raj-clothing-db",
	storageBucket: "raj-clothing-db.appspot.com",
	messagingSenderId: "400817237304",
	appId: "1:400817237304:web:ad1c95d4da70f657a025cd"
  };
  
 
  const firebaseapp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
     prompt: "select_account"
  });


  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth) => {
     const userDocRef = doc(db, 'users' , userAuth.uid);


	 const userSnapshot = await getDoc(userDocRef);
	

	 if(!userSnapshot.exists()) {
		 const {displayName, email} = userAuth;
		 const createdAt = new Date();

		 try{
			 await setDoc(userDocRef,{
				 displayName,
				 email,
				 createdAt
			 });
		 } catch (error) {
			 console.log('error creating thr user' , error.message);
		 }
	 }

	 return userDocRef;
  };