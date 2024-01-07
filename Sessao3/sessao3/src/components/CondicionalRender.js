import { useState } from "react";

const CondicionalRender = () =>{

    const [x] = useState(false); 
    const [name] =  useState("miguel"); 

    return (
        <div> 
            Ola eu sou A condicionalRender
            {/*Condicional */ }
            {x && <p> Estou aparecendo pois o x é True</p>}
            {!x && <p> Estou aparecendo pois o X é False </p>}
            {name === "João" ? (
                <div> 
                    <p> 🤣O nome é joao, parabéns</p>
                </div>
            ) : (<div> 
                 <p>😭  O nome não é joao, sinto muito </p>
            </div>)}
        </div>

    );};

export default CondicionalRender; 