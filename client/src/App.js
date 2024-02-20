import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
