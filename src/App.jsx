import logo from './logo.svg';
import './App.css';
import {FormControl} from './components/FormControl'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {NavBar} from './components/NavBar';
import {Home} from './pages/Home';
import { Fragment } from 'react';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import HomePage from './pages/Home';
import CartPage from './pages/cart';
import ProductDetail from './pages/ProductDetail';
import Reconocimiento from './pages/Reconocimiento';
import Exposiciones from './pages/Exposiciones';
import Retratos from './pages/Retratos';
import Categories from './pages/Categories';

import { ItemDetail } from './components/ItemDetail';
import CartWidget from './components/CartWidget';
import {ContextoGeneral}  from './contexts/CartContext';

function App() {
// const contextValue={
//   isEnabled: true,
//   toggle: () =>{}
// }

  return (
    <Fragment>
      <ContextoGeneral>
      <BrowserRouter>
            
            <NavBar/>
            <div className='flex flex-col mt-24'>
            <Switch>
                <Route exact path='/'>
                  <HomePage/>
                </Route>
                <Route path='/Cart'>
                  <CartPage/>
                </Route>
                <Route  path="/categories/:catid">
                  <Categories/> 
                </Route>
                <Route path='/p/:productoId'>
                  <ProductDetail/>
                </Route>                
                <Route path='/Reconocimiento'>
                  <Reconocimiento/>
                </Route>
                <Route path='/Exposiciones'>
                  <Exposiciones/>
                </Route>
                <Route path='/Retratos'>
                  <Retratos/>
                </Route>
            </Switch>
            </div>
            
      </BrowserRouter>
      </ContextoGeneral>
      <hr />
                
      <FormControl/> 
    </Fragment>
  );
}

export default App;
