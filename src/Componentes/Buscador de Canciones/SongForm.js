import React, { useState, useEffect } from 'react';

let iniForm = {
    artist: "",
    song: ""
}

function SongForm({ setSearch }) {

    const [form, setForm] = useState(iniForm);

    const handlerChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        if (!form.artist && !form.song) {
            alert("Los campos no pueden estar vacios")
            return
        }
        setSearch(form)
    }



    return (
        <div>
            <h3>Ingrese datos a buscar:</h3>
            <form onSubmit={handlerSubmit}>
                <input type="text" placeholder='Artista' name="artist" onChange={handlerChange} value={form.artist} />
                <input type="text" placeholder='Cancion' name="song" onChange={handlerChange} value={form.song} />
                <input type="submit" value="Buscar" />
            </form>
        </div>
    );
}

export default SongForm;