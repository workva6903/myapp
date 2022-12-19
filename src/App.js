import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Page404 from './component/Page404';
import User from './component/User';

function App() {
  
  return (
    <div className="App">
    
      <BrowserRouter>
      <Link to='/about'>About</Link>
      <Link to='/'>Home</Link>
      <Link to='/user/anil'>Anil</Link>
      <Link to='/user/peter'>Peter</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Page404 />} />
        <Route path='/user/:name' element={<User />} />
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
