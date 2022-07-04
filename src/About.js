import React from "react";
import "./App.css"

const Me = () => {

    return (
        <div>
            <div>
                <img className="Images" src="./img/me.jpg" alt="perfil"></img>
            </div>
            <div>
            <h1>Jesús Andrés Chacón Hernández</h1><br></br>
            <h5>Studen of Universidad Tecnológica de Aguascalientes</h5><br></br>
            
            <div class="hobbies">
        <table>
            <tr>
                <td>1-Ver Deportes </td>
            </tr>
            <tr>
                <td>2-Jugar Videojuegos </td>
            </tr>
            <tr>
                <td>3-Platicar con mis amigos en WhatsApp</td>
            </tr>
            <tr>
                <td>4-Dormir</td>
            </tr>
            <tr>
                <td>5-Comer</td>
            </tr>
        </table>
    </div>
            </div>
        </div>
     );

};
export default Me;