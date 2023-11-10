import { useState } from 'react'

const ListRender = () => {
    
    const[list] = useState(["matheues", "pedro", "josias"])

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );

};

export default ListRender;