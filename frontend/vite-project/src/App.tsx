import React from 'react';
import Home from './components/pages/react/Home';
import Login from './components/pages/react/Login'
import Shop from "./components/pages/react/Shop";
import EventsCalendary from "./components/pages/react/EventsCalendary";
import SignUp from "./components/pages/react/SignUp";
import History from "./components/pages/react/History";
import About from "./components/pages/react/About";
import Donate from "./components/pages/react/Donate";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // atributos para rotas de páginas
import './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/EventsCalendary" element={<EventsCalendary />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/history" element={<History />} />
                <Route path="/Donate" element={<Donate />} />
                <Route path="/About" element={<About />} />
                <Route path="*" element={<h1>Not Found 404</h1>} />'
            </Routes>
        </BrowserRouter>
    );
}