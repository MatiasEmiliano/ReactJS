import React, { useState, useEffect } from 'react';
import useForm from './useForm';
import Loader from '../Buscador de Canciones/Loader';
import './ContactForm.css'

const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: ""
}



const validateForm = (form,e) => {
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;



    if (!form.name.trim()) {
        errors.name = "El campo nombre no puede estar vacio"
    }else if(!regexName.test(form.name.trim())){
        errors.name = "El campo nombre solo acepta letras y especios en blanco"
    }

    if (!form.email.trim()) {
        errors.email = "El campo email no puede estar vacio"
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = "El campo email es incorrecto"
    }

    if (!form.subject.trim()) {
        errors.subject = "El campo Subject no puede estar vacio"
    }

    if (!form.comments.trim()) {
        errors.comments = "El campo comments no puede estar vacio"
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments = "El campo Comentarios  no debe exceder las 255 caracteres"
    }

    return errors
}

//Formulario de contacto para mandar mensaje a casilla de mail predefinida mediante API formsubmit.com. Utiliza hook personalidado useForm que genera los Hook del formulario
function ContactForm() {
    const { form, errors, loading, response, handleBlur, handleChange, handleSubmit } = useForm(initialForm, validateForm)



    return (
        <div className='containerForm'>
            <h2>Formulario de Contacto</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Escribe tu nombre' onBlur={handleBlur} onChange={handleChange} value={form.name} required />
                {errors.name && <p>{errors.name}</p>}
                <input type="email" name='email' placeholder='Escribe tu email' onBlur={handleBlur} onChange={handleChange} value={form.email} required />
                {errors.email && <p>{errors.email}</p>}
                <input type="text" name='subject' placeholder='Asunto a tratar' onBlur={handleBlur} onChange={handleChange} value={form.subject} required />
                {errors.subject && <p>{errors.subject}</p>}
                <textarea name="comments" row="5" placeholder='Escribe tus comentarios' onBlur={handleBlur} onChange={handleChange} value={form.comments} required />
                {errors.comments && <p>{errors.comments}</p>}
                <input type="submit" name="submit" value="Enviar" />
            </form>
            {loading && <Loader />}
        </div>



    );
}

export default ContactForm;

