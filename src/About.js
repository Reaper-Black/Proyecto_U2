import React from "react";
import "./App.css"

const Me = () => {

    return (

        <div className='about'>
            <div>
                <img className="image" src="./img/me.jpg" alt="perfil"></img>
            </div>
            <div className='hobbies'>
                <div> Jesús Andrés Chacón Hernández </div>
                <div>Matricula: 161000</div>
                <div>Universidad Tecnologica de Aguascalientes</div>
                <div>Ingenieria en Desarrollo y Gestion de Software</div>
                <div>Diseño Web Profesional</div>
            </div>
        </div>
    );
};
export default Me;