
import React from 'react'
import './App.scss';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUP from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component' 

import Header from './components/header/header.component' 


function App() {
  return (
  <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
      <Route path="/signin" component={SignInAndSignUP}></Route>
    </Switch>
   </div>
  );
}

export default App;