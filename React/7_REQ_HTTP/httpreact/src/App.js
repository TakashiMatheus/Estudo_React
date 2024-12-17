import './App.css';

import {useState, useEffect} from 'react';

// 4 - custom Hook

import { useFetch } from './hooks/useFetch';


const url = "http://localhost:3000/products";


function App() {

  const [products, setProducts] = useState([]);

  // 4 - custom 
  const {data: items, httpConfig, loading, error} = useFetch(url)


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Resgatando dados Executado apenas uma vez parece

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setProducts(data)
  //   }
    
  //   fetchData();

  // }, []);

  // 2 - add de produtos

  const handleSubmit =  async (e) => {
    e.preventDefault();

    const product = {
      name, 
      price,
    };
    
    // const res = await fetch(url, {
    //   method: "POST", 
    //   headers: {
    //     "Content-type" : "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })

    // // 3 - carregamento dinâmico 

    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    // setName("");
    // setPrice("");

    // 5 - refatorando POST 

    httpConfig(product, "POST")
    setName("")
    setPrice("")
  }

  // 8 - Desafio 
  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }


  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/*6 - Loading */}
      {loading && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items && items.map((product) => ( 
          <li key={product.id}>
            {product.name} - R$ {product.price}
            <button onClick={()=> handleRemove(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <div className='addProducts'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type='text' value={name} name='name' onChange={(e) => (setName(e.target.value))}></input>
          </label>
          <label>
            Preço:
            <input type='number' value={price} name='price' onChange={(e) => (setPrice(e.target.value))}></input>
          </label>
          {/*7 - State de loading no POST */}
          {loading && <input type='submit' value="Aguarde" disabled/>}
          {!loading && <input type='submit' value="Criar"/>}
        </form>
      </div>
    </div>
  );
}

export default App;
