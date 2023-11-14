import React from 'react';
import Home from './components/pages/Home';
import Login from './components/pages/Login'
import Shop from "./components/pages/Shop";
import EventsCalendary from "./components/pages/EventsCalendary";
import SignUp from "./components/pages/SignUp";
import History from "./components/pages/History";
import About from "./components/pages/About";
import Donate from "./components/pages/Donate";
import Gallery from './components/pages/Gallery';
import Apoiadores from './components/pages/Apoiadores';
import CallUs from './components/pages/CallUs';
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
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/Apoiadores" element={<Apoiadores />} />
                <Route path="/FaleConosco" element={<CallUs />} />
                <Route path="*" element={<h1>Not Found 404</h1>} />'
            </Routes>
        </BrowserRouter>
    );
}