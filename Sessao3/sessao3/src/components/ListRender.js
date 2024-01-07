import { useState } from 'react'


const ListRender = () => {
    
    const[list] = useState(["matheues", "pedro", "josias"])

    const[users, SetUsers] = useState([
        {id: 1, name: "matheus" , age: 34}, 
        {id: 2, name: "raquel" , age: 20}, 
        {id: 3, name: "joao" , age: 70}, 
        {id: 4, name: "Rafael" , age: 21}, 
    ]);

    const DeleteRandom =  () => {
        const RandomNumber = Math.floor(Math.random() * 5);
        
        SetUsers((PrevUsers) => {
            //maninuplação para alterar o state dos usuarios
            return PrevUsers.filter((user) => RandomNumber !== user.id )
        })
    };

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}> {user.name} {user.age} </li>
                    ))}
            </ul>
            <button onClick={DeleteRandom}> Deletar item aleatório  na lista de user </button>
        </div>
    );

};

export default ListRender;