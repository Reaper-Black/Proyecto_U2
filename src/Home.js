import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Main from "./Main.js"
import Infos from "./Info.js"
import Me from "./About.js"
import Dir from "./Navbar.js"

const Home = () => {
    // eslint-disable-next-line
    const Inicio = () => <h1>Home</h1>;
    // eslint-disable-next-line
    const Pokemon = () => <h1>Pokemon List</h1>;
    // eslint-disable-next-line
    const About = () => <h1>161000</h1>;

    return (
        <div>
            <Dir />
            <BrowserRouter>
                <Routes>
                    <Route path="/pokemons" element={<Main />}></Route>
                    <Route path="/pokemonsinfo" element={<Infos />}></Route>
                    <Route path="/matricula" element={<Me />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default Home;