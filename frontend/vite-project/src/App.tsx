import React from 'react';
import Home from './components/pages/Home';
import Login from './components/pages/Login'
import Shop from "./components/pages/Shop";
import EventsCalendary from "./components/pages/EventsCalendary";
import SignUp from "./components/pages/SignUp";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // atributos para rotas de páginas
import './App.css';

function App() {
    return (
      <div>
        <SignUp/>
      </div>
    );
  } 

export default App;