import React, { useEffect } from 'react';
import HomeScreen from "./HomeScreen";
import ProfileScreen from './Screens/ProfileScreen';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginScreen from './Screens/LoginScreen';
import { auth } from './Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
 
 


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe =
      auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          dispatch(login({
            uid:userAuth.uid,
            email:userAuth.email,
          })
        );

        }
        else {
          dispatch(logout());
        }


      });


    return unsubscribe;



  }, [dispatch]);





  return (
    <div className="App">

      <Router>

        {!user ? (<LoginScreen />)

          : (
            <Switch>

              <Route path="/profile">

                <ProfileScreen />

              </Route>


              <Route path="/">

                <HomeScreen />

              </Route>
            </Switch>
          )
        }


      </Router >
    </div>



  )
}

export default App;
