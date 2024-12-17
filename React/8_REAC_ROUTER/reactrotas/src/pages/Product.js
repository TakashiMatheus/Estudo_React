import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
    // 4 - Rota Dinâmica 
    const { id } = useParams();
    
    // 5 - carregamento individual de dados
    const url = "http://localhost:3000/products/" + id
    const {data:product, loading, error} = useFetch(url)

    console.log(product)
    return(
        <>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R${product.price}</p>
                    <Link to={`/product/${product.id}/info`}>Mais detalhes</Link>
                </div>
            )}
        </>
    )
}

export default Product;