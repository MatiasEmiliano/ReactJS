import React, { useState } from 'react';

function useForm(initialForm, validateForm) {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validateForm(form, e))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validateForm(form, e))

        if (Object.keys(errors).length === 0) {
            setLoading(true)
            //alert("Enviando Formulario")

            fetch("https://formsubmit.co/ajax/mati27@hotmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(form)
            })
                .then(response => response.json())
                .then((data) => {
                    console.log(data)
                    setLoading(false)
                    setResponse(true)
                    setTimeout(()=>{setResponse(false)},5000)
                })
                .catch(error => console.log(error));

        } else {
            return
        }
    }

    return { form, errors, loading, response, handleBlur, handleChange, handleSubmit }
}

export default useForm;