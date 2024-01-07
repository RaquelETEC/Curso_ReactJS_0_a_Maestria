/*const CarDetails = (props) => {
    return (
       <div>
        Ola eu sou o CarDetails, irei apresentar como funciona a Destruturing 
        <p> ° Imprimir mais de uma propriedade</p>
       <br/>

       <h2> Detalhes do carro </h2> 
       <ul>
        <li> Marca:{props.brand}  </li>
        <li> KM:{props.KM * 2}  </li>
        <li> Cor:{props.color}  </li>
       </ul>

       
       </div>
    );
};

*/
//SIMPLIFICANDO COM Desrtyuctring
const CarDetails2 = ({brand, KM , color, novo}) => {
    return (
       <div>
        Ola eu sou o CarDetails, irei apresentar como funciona a Destruturing 
        <p> ° Imprimir mais de uma propriedade</p>
       <br/>

       <h2> Detalhes do carro </h2> 
       <p> Resumido com Desrtyuctring</p>
       <ul>
        <li> Marca:{brand}  </li>
        <li> KM:{KM * 2}  </li>
        <li> Cor:{color}  </li> 
       </ul>
       {novo && <p>Este carro é novo!</p>}

       {novo === true ? <p>este carro é novo</p>:<p>este carro nao é novo</p>}
       
       </div>
    );
};

export default CarDetails2;