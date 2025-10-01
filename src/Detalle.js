import React from "react";

const Detalle = ({ cambiarPagina }) => {
    return (
    <div>
        <h1>Detalles del iPhone 14 Pro</h1>
        <p>Aquí va la información ampliada del producto...</p>

        <main className="contenedor">
                <video src="/Videos/iphoneVideo.mp4" 
                autoPlay 
                muted 
                loop 
                className="video-producto"
                />
                <section className="descripcion">
                    <h2>iPhone 14 Pro – Innovación que se siente</h2>
    <ul class="caracteristicas">
      <li>Pantalla Super Retina XDR de 6,1” con ProMotion para una experiencia fluida.</li>
      <li>Chip A16 Bionic: rendimiento potente y eficiente para todo lo que hagas.</li>
      <li>Sistema de cámaras Pro con modo Noche, fotografía macro y grabación en 4K.</li>
      <li>Seguridad y privacidad al máximo con Face ID y encriptación avanzada.</li>
      <li>Diseño en acero inoxidable y Ceramic Shield, resistente y premium.</li>
    </ul>
        <button className="btn-volver" onClick={() => cambiarPagina("producto")}>
        Volver al inicio
        </button>
                </section>
            </main>

    </div>
    );
};

export default Detalle;