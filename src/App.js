import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      {/* <HomePage></HomePage> */}
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
