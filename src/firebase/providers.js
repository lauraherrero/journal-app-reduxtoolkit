import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();


export const singInWithGoogle = async() => {


  try {

    const result = await signInWithPopup( FirebaseAuth, googleProvider );
    //const credential = GoogleAuthProvider.credentialFromResult( result );

    const { displayName, email, photoURL, uid } = result.user;
    
    return {
      ok: true,
      //User info:
      displayName, email, photoURL, uid
    }

  } catch (error) {
    console.log(error);

    const errorCode = error.code;
    const errorMessage = error.message;
  

    return {
      ok: false,
      errorMessage
    }
  }
}


export const registerUserWithEmailPassword = async({ email, password, displayName }) => {

  try {

    const result = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
    console.log(result);
    const { uid, photoURL } = result.user;
    await updateProfile( FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      displayName, email, photoURL, uid
    }
    
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    }
  }
}

export const loginWithEmailPassword = async({ email, password }) => {

  try {

    const result = await signInWithEmailAndPassword( FirebaseAuth, email, password );
    const { uid, photoURL, displayName } = result.user;

    return {
      ok: true,
      displayName, email, photoURL, uid
    }
    
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    }
  }
}

export const logOutFirebase = async() => {
  return await FirebaseAuth.signOut();
}