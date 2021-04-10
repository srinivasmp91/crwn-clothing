import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up.component';
import {auth} from './firebase/firebase.utils';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        this.setState({currentUser: user});
        console.log(user);
      })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <HomePage></HomePage> */}
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInAndUp}></Route>
        </Switch>
      </div>
    );
  }  
}

export default App;
