import React from 'react';
import Home from './components/pages/Home';
import Login from './components/pages/Login'
import Shop from "./components/pages/Shop";
import EventsCalendary from "./components/pages/EventsCalendary";
import SignUp from "./components/pages/SignUp";
import History from "./components/pages/History";
import About from "./components/pages/About";
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
            </Routes>
        </BrowserRouter>
    );
}