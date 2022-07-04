import React from "react";
import "./Styles.css"

const Me = () => {

    return (

        <div className='about'>
            <div>
                <img className="image" src="./img/me.jpeg" alt="perfil"></img>
            </div>
            <div className='about-me'>
                <div>Universidad Tecnológica de Aguascalientes</div>
                <div>Ingeniería en Desarrollo y Gestión de Software</div>
                <div>Diseño Web Profesional</div>
                <div> Jesús Andrés Chacón Hernández </div>
                <div>Matricula: 161000</div>
            </div>
        </div>
    );
};
export default Me;