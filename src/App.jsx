import logo from './logo.svg';
import './App.css';
import {FormControl} from './components/FormControl'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {NavBar} from './components/NavBar';
import {Home} from './pages/Home';
import { Fragment } from 'react';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import HomePage from './pages/Home'
import CartPage from './pages/cart';
import ProductDetail from './pages/ProductDetail';
import Reconocimiento from './pages/Reconocimiento';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
            <NavBar/>
            <div className='flex flex-col mt-24'>
            <Switch>
                {/* <Route exact path='/' element={<Home/>} /> */}
                {/* <Route path='/Obras' element={<Obras/>} />
                <Route path='/Reconocimiento' element={<Reconocimiento/>} /> */}
                <Route exact path='/'>
                  <HomePage/>
                </Route>
                <Route path='/Cart'>
                  <CartPage/>
                </Route>
                <Route path='/Product/:id'>
                  <ProductDetail/>
                </Route>
                <Route path='/Reconocimiento'>
                  <Reconocimiento/>
                </Route>
            </Switch>
            </div>
      </BrowserRouter>
      <ItemListContainer/>
      <hr />
      <ItemDetailContainer/>          
      <FormControl/> 
    </Fragment>
  );
}

export default App;
