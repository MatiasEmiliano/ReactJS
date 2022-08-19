import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch'

// const doFetch = async (url,cb) =>{       //Sin usar hook perzonalidado useFetch
//     const request = await fetch (url)
//     const data = await request.json()
//     cb(data)
// }


function SelectList({ nombre, url, handleChange, flag }) {

    const [item, setItem] = useState(null);

    const {data,inPending, err} = useFetch(url)


    // useEffect(() => {
    //     if(flag) doFetch(url,setItem)    //Sin usar hook perzonalidado useFetch
    // }, [url]);

    useEffect(() => {   //Usando hook perzonalidado useFetch
        setItem(data)
    }, [data]);
    

    return (
        <div>
            <label>{`Seleccione ${nombre}`}</label>
            <select onChange={handleChange}>
                <option value="">---</option>
                {flag && item && item.map(e => <option key={e.nombre} value={e.nombre}>{e.nombre}</option>)}
            </select>
        </div>
    );
}

export default SelectList;