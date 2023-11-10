import {useState} from "react";

const ManageData = () => {

    const someData = 10;

    const [numero, setnumero] = useState(15); 

    return (
        <div>
            <p> valor {someData}</p>

            <div> 
                <p> Valor: {numero }</p>
                <button onClick={() => setnumero(25)}> Mudar o State </button>
            </div>

        </div>
    );
};

export default ManageData;