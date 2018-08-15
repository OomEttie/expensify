import { firebase, googleAuthProvider } from '../firebase/firebase';

//
// LOGIN
//
export const login = uid => ({ 
  type: 'AUTH_LOGIN',
  uid: uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

// 
// LOGOUT
//
export const logOut = uid => ({ 
  type: 'AUTH_LOGOUT'
});

export const startLogOut = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

