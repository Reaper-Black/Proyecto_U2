import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import  Main  from "./Main.js"
import Card  from "./Card.js"
import Dir from "./Navbar.js"

const Home = () => {
  const Inicio = () => <h1>Home</h1>;
  const Pokemon = () => <h1>Pokemon List</h1>;
  const About = () => <h1>161000</h1>;
  return (
    <>
    <Dir />
      <BrowserRouter>
        <Routes>
          <Route path="/pokemons" element={<Main />}></Route>
          <Route path="/pokemonsinfo" element={<Card   />}></Route>
          <Route path="/matricula" element={<About />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
};
export default Home;