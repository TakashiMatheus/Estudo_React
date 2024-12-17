import { useParams, Link, useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams

    const {data: items, loading, error} = useFetch(url)

    


    return (
        <div>
            <h1>Resultados disponíveis</h1>
            {error && <p>{error}</p>}
            <ul className="products">
                {items && items.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R${item.price}</p>
                        <Link to={`/product/${item.id}`}>Detalhes</Link> 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search