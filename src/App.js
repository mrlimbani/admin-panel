import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './Components/auth/LoginPage';
import ForgotPage1 from './Components/auth/ForgotPage1';
import RegisterPage from './Components/auth/RegisterPage';
import Dashborad from './Components/dashboard/Dashboard';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Route exact path="/forgot-password" component={ForgotPage1}></Route>
          <Route exact path='/dashboard' component={Dashborad}></Route>
          
     


        </Switch>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
