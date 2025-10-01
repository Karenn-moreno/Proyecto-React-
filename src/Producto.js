import React from "react";
import "./Productos.css"; 
import Formulario from "./Formulario";

const Producto =({cambiarPagina})=> {
    return (
        <div className="producto-pagina">
            <header className="header">
                <h1>IPHONES STOCK </h1>
                <p>Calidad de resolución</p>
            </header>
            <main className="contenedor">
                <img src="/Imagenes/iphone14pro.png" alt="iphone14pro" className="imagen-producto"/>
                <section className="descripcion">
                    <h2>Experiencia de definición HD</h2>
                    <p>Los nuevos <strong>Iphone14pro</strong> ofrecen calidad y el mejor diseño al cliente</p>
                
                <button className="det-btn" onClick={() => cambiarPagina("detalle")}>Ver más detalles</button>
                    
            
                </section>
            </main>

            <section className="Contacto">
                <h2>Contactanos</h2>
                <p>Tenes alguna consulta? ¡Envianos un mensaje!</p>
                <Formulario/>
            </section>
        </div>
    );
};
export default Producto;