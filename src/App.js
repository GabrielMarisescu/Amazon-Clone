import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import {BrowserRouter  as Router, Route , Switch} from "react-router-dom";
import Login from "./Login";
import {auth} from "./firebase.js"
import { useStateValue } from "./StateProvider";
import Payment from "./Payment"



function App() {  

  const [{basket},dispatch] = useStateValue()
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
    <div className="app">
      <Switch >


      <Route path="/" exact>
      <Header />
      <Home />
      </Route>




      <Route path="/checkout" exact>
      <Header />
      <Checkout />
      </Route>


      <Route path="/login" exact>
        <Login />
      </Route>


      <Route path="/payment" exact>
      <Header />
      <Payment />
      </Route>



      </Switch>
    </div>
    </Router>
  );
}

export default App;
