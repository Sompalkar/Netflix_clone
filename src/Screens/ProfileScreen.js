import React from 'react'
import "./ProfileScreen.css"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import Nav from '../Nav';
import PlansScreen from './PlansScreen';
import { auth } from '../Firebase';

function ProfileScreen() {
  const User = useSelector(selectUser);

  return (
    <div className='profileScreen'>

      <Nav />
      
      <div className='profileScreen-body'>

        <h1>Profile</h1>


        <div className='profileScreen-Info'>


          <img src='https://th.bing.com/th/id/OIP.kGXc4O38ZF2wXmesqSupjwHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
            alt='Netflix Logo' />

          <div className='profileScreen-Details'>


            <h2>{User.email}</h2>

            <div className='profileScreen-Plans'>

              <h3>Plans</h3>
              <PlansScreen />


             <button 
              onClick={() => auth.signOut()}

               className='profileScreen-SignOut'>Sign out </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}


export default ProfileScreen
