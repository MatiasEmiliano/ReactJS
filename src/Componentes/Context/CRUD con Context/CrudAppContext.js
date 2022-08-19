import React, { useState } from "react";
import { DbProvider } from "../context/dBContext";
import CrudTableContext from "./CrudTableContext";
import CrudFormContext from "./CrudFormContext"; 





function CruddAppContext() {

    return (
        <div>
            <h2>Crud App desde Array de Datos</h2>
            <article className="grid-1-2">
                <DbProvider>
                    <CrudFormContext />
                    <CrudTableContext />
                </DbProvider>
            </article>
        </div>
    );
}

export default CruddAppContext;