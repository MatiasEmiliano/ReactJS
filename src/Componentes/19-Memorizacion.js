import React, { useState } from 'react';
import ContadorHijo from './19b-Memorizacion';

function Memo() {
    const [contador, setContador] = useState(0);
    const suma = () => { setContador(contador + 1) }
    const resta = () => { setContador(contador - 1) }

    return (<div>
        <h2>Contador</h2>
        <h3>{`Valor: ${contador} `}</h3>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <ContadorHijo />

    </div>
    );
}

export default Memo;



