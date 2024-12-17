import './App.css';
import City from './assets/img2.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/carDetails';
import Fragment from './components/Fragment'
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
import UserDetails from './components/UserDetails';
import {useState} from "react"

function App() {
  const [cars] = useState([
    {id:"1", brand:"Ferrari", color:"Amarela", newCar: true, km: 2222},
    {id:"2", brand:"BMW", color:"White", newCar: false, km: 123123},
    {id:"3", brand:"Ferrari", color:"Amarela", newCar: true, km: 223312},
  ]);

  const [users] = useState([
    {id: 1, nome:"Matheus", profissao:"Cozinheiro", idade:"20"},
    {id: 2, nome:"Joao", profissao:"Médico", idade:"12"},
    {id: 3, nome:"Guilherme", profissao:"Arquiteto", idade:"30"},
  ])

  function showMessage() {
    console.log("Evento componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em REACT</h1>
      {/*Imagem que está na pasta public */}
      <div>
          <img src='/img1.jpg' alt='tentativa de imagem'></img>
      </div>
      <div>
        {/*Imagem em assets */}
          <img src={City} alt='Imagem de cidade'></img>
      </div>
    <ManageData/>
    <ListRender/>
    <ShowUserName name="Matheus"/>

    {/* utilizando props*/}

    <CarDetails brand="Chevrolet" km={10000} color="off-white" newCar= {true} />

    {/*loop de array de objetos*/}

    {cars.map((car) => (
      <CarDetails 
            key={car.id}
            brand={car.brand} 
            km={car.km} 
            color={car.color} 
            newCar={car.newCar}
      />
    ))}
    
    {/*Testando fragmentos */}
    <Fragment propfragment="testando se ta funcionando"/>

    {/*Utilizando Containers  */}
    <Container myValue={2000}>
      <p>Testando children</p>
    </Container>

    {/*Executando funcao do componente pai no filho */}
    <ExecuteFunction myFunction={showMessage}/>

    {/*Using State lift */}
    <Message msg={message}/>
    <ChangeMessage handleMessage={handleMessage}/>

    {users.map((user) => (
      <UserDetails
        nome={user.nome}
        idade={user.idade}
        profissao={user.profissao}
      />
    ))}
    </div>

    
  );
}

export default App;
