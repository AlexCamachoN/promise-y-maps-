import logo from './logo.svg';
import './App.css';
import {FormControl} from './components/FormControl'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {NavBar} from './components/NavBar';
import {Home} from './pages/Home';
import { Fragment } from 'react';
import {ItemListContainer} from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/Home' element={<Home/>} />
                {/* <Route path='/Obras' element={<Obras/>} />
                <Route path='/Reconocimiento' element={<Reconocimiento/>} /> */}
            </Routes>
      </BrowserRouter>
      <ItemListContainer/>
      <hr />
      <ItemDetailContainer/>          
      <FormControl/> 
    </Fragment>
  );
}

export default App;
