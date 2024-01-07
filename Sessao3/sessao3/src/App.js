import './App.css';
import Mine from './assets/fundo_foto.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetais from './components/CarDetails';
import Fragment from './components/Fragment';
import Children from './components/Chield';
import ExecuteFunction from './components/ExecuteFunction';
import ChangeMessageState from './components/ChangeMessageState';
import UserDatails from './components/UserDatails';


import { useState } from 'react';
import { Message } from './components/Message';



function App() {
  // esse é o componente pai

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "kia", color: "branco", newCar: false, km: 120000 },
    { id: 3, brand: "Renalt", color: "azul", newCar: false, km: 30341 }
  ]

  const pessoas = [
    { id: 1, nome: "Raquel", idade: 20, profissao: "Desenvolvedora" },
    { id: 2, nome: "Miguel", idade: 16, profissao: "Ator" },
    { id: 3, nome: "Rafael", idade: 20, profissao: "Designer" },
  ]

  function ExibirMensagem() {
    window.alert("Eu sou uma atenção")
  };

  const [message, setsMessage] = useState("");

  //A constante (variavel que não tem seu valor alterado) Chamada HandleMessage
  //Recebe um argumento chamado msg 
  const handleMessage = (msg) => {
    //e vai alterar o estado da const message com o uso do SetMessage, a aprtir da msg
    setsMessage(msg);
  }

  return (
    <div className="App">
      <p>Ola a todos</p>
      <div>
        {/* Imagem na pasta public*/}
        <img className="img_1" src="/gatinho_e_toto.jpg" alt="gatinho e cachorrinho" />
        <br />

        {/* Imagem na pasta assets*/}
        <img className="img_2" src={Mine} alt="gatinho e cachorrinho" />
      </div>
      <hr />
      <ManageData />
      <hr />
      <ListRender />

      <hr />
      <CondicionalRender />

      <hr />
      {/*Destruturing*/}
      <ShowUserName nome="Raquel" />

      {/*Destruturing*/}
      <hr />
      <CarDetais brand="VW" KM={1000} color="AZUL" novo={true} />

      {/* Reutilização de componentes*/}
      <hr /> <hr />

      <CarDetais brand="Ford" color="Vermelha" KM={0} novo={false} />
      <CarDetais brand="fIAT" color="Branco" KM={4500} novo={true} />
      {/* Reutilzação com Loop*/}

      {/*Loop em array de objeto */}
      <hr /> <hr />
      {cars.map((car) => (
        <CarDetais brand={car.brand}
          color={car.color}
          novo={car.newCar}
          KM={car.km} />
      ))}

      <hr /> <hr />
      <Fragment />
      {/* Desse jeito não aparece a DIV no html que vai para pagina*/}
      <hr /> <hr />
      <Children>
        <p> É desse jeito que eu escrevo algo entre os componetes</p>
      </Children>
      {/*executar função no componente filho pelo componente pai */}
      <ExecuteFunction myfunction={ExibirMensagem} />
      <hr /> <hr />
      {/*Alterando um conponente a partir de outro componente */}
      <Message msg={message} />
      {/* Chamando a função que altera o estado da proprieade
      
       <ChangeMessageState handleMessage={handleMessage}/>
        pode ser qualquer nome esse aqui, que leva a props*/}
      <ChangeMessageState biscoito={handleMessage} />

      {/* Desafio*/}
      <hr /> <hr />
        {pessoas.map((listapessoas)=> (
          <UserDatails id={listapessoas.id} nome={listapessoas.nome}  idade = {listapessoas.idade}
          profissao={listapessoas.profissao}/>
        ))}

    </div>
  );
}

export default App;
