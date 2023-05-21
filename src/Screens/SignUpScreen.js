import React, { useRef } from 'react'
import { auth } from '../Firebase'
import "./SignUpScreen.css"


function SignUpScreen() {
    const emaiRef = useRef(null);
    const passwordRef = useRef(null);


    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emaiRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error.message);
            });



    };



    const signIn = (e) => {

        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emaiRef.current.value,
            passwordRef.current.value
        )

            .then((authUser) => {
                console.log(authUser);
            })

            .catch((error) => {

                alert(error.message);

            });

    };










    return (

        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emaiRef} type='email' placeholder='Email' />
                <input ref={passwordRef} type=' password' placeholder='Password' />
                <button type='submit' onClick={signIn} >Sign In </button>
                <h4>
                    <span className='signupScreen-text'>New to Netflix? </span>
                    <span className='signupScreen-link' onClick={register}>Sign Up now.  </span>
                </h4>
            </form>

        </div>
    )

}

export default SignUpScreen
