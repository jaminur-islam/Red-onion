import initAuthentication from "../Firebase/firebaseInit";
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged , signOut , FacebookAuthProvider , GithubAuthProvider} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
initAuthentication();


const useFirebase = () =>{
// user State
const [user , setUser] = useState({});
// auth
const auth =  getAuth()

// googleProvider
const googleProvider = new GoogleAuthProvider();
// facebook authProvider
const facebookProvider = new FacebookAuthProvider();
// githubProvider 
const gitProvider = new GithubAuthProvider();

//githubSign
const githubSign = () =>{
  signInWithPopup(auth , gitProvider)
  .then(result =>{
    console.log(result);
  })
}

//facebookSign
const facebookSign = () =>{
  signInWithPopup(auth , facebookProvider)
  .then(result=>{
  })
}

// googleSign in
const googlesign = () => {
  signInWithPopup(auth , googleProvider)
  .then(result =>{
    console.log(result);
  })
}
// LogOut
const logOut = () =>{
  signOut(auth)
  .then(()=>{

  })
}

// important onstateChange
useEffect(()=>{
const unsubscribed =  onAuthStateChanged(auth , (user)=>{
    if(user){
      setUser(user);
    }else{
      setUser({})
    }
  })
  return ()=> unsubscribed;
},[])


return {googlesign , logOut , user , facebookSign , githubSign}

}

export default useFirebase;