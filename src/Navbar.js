import React from "react";
import "./Styles.css"

const Dir = () => {

    return (
        <nav>
            <div className='options'>
                <a href="/pokemons" className='hover-underline-animation'> Pokemons </a>
                <a href="/pokemonsinfo" className='hover-underline-animation'> Pokemons Information </a>
                <a href="/matricula" className='hover-underline-animation'> 161000 </a>
            </div>
        </nav>
    );

};

export default Dir;