import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles.css"
import Main from "./Main.js"
import Infos from "./Info.js"
import Me from "./About.js"
import Dir from "./Navbar.js"

const Home = () => {

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