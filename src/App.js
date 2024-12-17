import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Errorpage from './errorpage/errorpage';
import Login from './login/login';
import Teams from './teams/teams';
import Main from './main/main';
function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
