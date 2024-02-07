import { singInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logOutFirebase } from '../../firebase/providers';
import { clearNotesLogout } from '../journal/journalSlice';
import { checkingCredentials, login, logout } from './authSlice'


export const checkingAuthentication = () => {

  return async( dispatch ) => {

    dispatch( checkingCredentials() );

  }
}


export const startGoogleSignIn = () => {

  return async( dispatch ) => {
    
    dispatch( checkingCredentials() );

    const result = await singInWithGoogle();
    console.log(result);

    if( !result.ok ) return dispatch( logout( result.errorMessage ) );
    dispatch( login( result ));
  }
}

export const createUserWithEmailPassdword = ({ email, password, displayName }) => {
  return async( dispatch ) => {

    dispatch( checkingCredentials() );

    const result = await registerUserWithEmailPassword({ email, password, displayName });

    if( !result.ok ) return dispatch( logout( result.errorMessage ));

    dispatch( login( result ));

    
  }
}

export const startLoginWithEmailPassword = ({ email, password, displayName }) => {

  return async( dispatch ) => {

    dispatch( checkingCredentials() );

    const result = await loginWithEmailPassword({ email, password, displayName });

    if( !result.ok ) return dispatch( logout( result.errorMessage ));

    dispatch( login( result ));
  }
}

export const startLogOut = () => {
  return async(dispatch) => {

    await logOutFirebase();

    dispatch( clearNotesLogout() );
    dispatch( logout({}));
  }
}