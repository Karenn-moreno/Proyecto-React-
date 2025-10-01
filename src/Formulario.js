import React, { useState } from "react";
import "./Formulario.css";

const Formulario=()=>{
    const[formData,setFormData]= useState({
        nombre:'',
        email:'',
        mensaje:''
    });
    const[errors,setErrors]=useState({});
    const validate=()=>{
        const newErrors={};

        if (!formData.nombre.trim()){
            newErrors.nombre="El nombre es obligatorio"
        }
        if (!formData.email.trim()){
            newErrors.email="El email es obligatorio"
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
            newErrors.email="ingreso un correo no valido";
        }
        if (!formData.mensaje.trim()){
            newErrors.mensaje="Tiene que ingresar un mensaje";
        }
        return newErrors;
    };
    // Manejo de cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  // Manejo del submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
    alert("¡Formulario enviado correctamente!");
      console.log("Formulario enviado:", formData);
      setFormData({ nombre: '', email: '', mensaje: '' });
    }
  };

    return(
    <form onSubmit={handleSubmit}noValidate>
        <div>
            <label>Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
            {errors.nombre && <span style={{color:'red'}}>{errors.nombre}</span>}

        </div>
        <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
        </div>
        <div>
            <label>Mensaje</label>
            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}/>
             {errors.mensaje && <span style={{color:'red'}}>{errors.mensaje}</span>}
        </div>
        <button type="submit" >Enviar</button>

    </form>)
}


export default Formulario;