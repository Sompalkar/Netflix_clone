import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

  const [signIn, setSignIn] = useState(false);

  return (




    <div className='loginScreen'>


      <div className='loginScreen-background'>



        <img className='loginScreen-logo'

          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png'

          alt=" " />



        <button onClick={() => setSignIn(true)}

          className='loginScreen-button'>Sign In</button>

        <div className='loginScreen-gradient' />



      </div>




      <div className='loginScreen-body'>
        {signIn ? (

          <SignUpScreen />
        )
          :
          (
            <>
              <h1> Unlimited films, TV programmes and more.</h1>

              <h2>Watch anywhere. Cancel at any  time.</h2>

              <h3>
                Ready to watch? Enter your email to create or restart your membership.
              </h3>

              <div className='loginScreen-input'>
                <form>
                  <input type='email'
                    placeholder='Email Address' />

                  <button onClick={() => setSignIn(true)}

                    className='loginScreen-inputbtn'>

                    GET STARTED

                  </button>

                </form>
              </div>



            </>





          )}




      </div>



    </div>
  );
}


export default LoginScreen
