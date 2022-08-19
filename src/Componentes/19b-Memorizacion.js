import React, { memo } from 'react';

function ContadorHijo() {
    console.log("Renderizacion de componente Hijo")     //Sin el memo, este componente se renderiza siempre
    return (                                            //Con el memo: Se renderiza solo si cambia alguna props.
    <div>                                               
        <h3>Contador Hijo</h3>
    </div>
    );
}

export default memo(ContadorHijo) //   <<<<==== Memo
