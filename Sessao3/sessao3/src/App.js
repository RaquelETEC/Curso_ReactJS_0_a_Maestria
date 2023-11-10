import './App.css';
import Mine from './assets/fundo_foto.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';


function App() {
  return (
    <div className="App">
       <p>Ola a todos</p>
       <div>
        {/* Imagem na pasta public*/}
        <img className="img_1" src ="/gatinho_e_toto.jpg" alt="gatinho e cachorrinho" />
        <br/>
       </div>
       <div>
        {/* Imagem na pasta assets*/}
        <img className="img_2" src = {Mine} alt="gatinho e cachorrinho" />
        </div>
        <div>
          <hr/>
            <ManageData/>
        </div>
        <div>
           <hr/>
          <ListRender/>
        </div>
    </div>
  );
}

export default App;
