import { useCounterContext } from "../hooks/useCounterContext"

const Curiosities = () => {
    const {counter} = useCounterContext();
    return (
        <div>
            Estou na Curiosities
            <p>Valor do contador: {counter}</p>
        </div>
    )
}

export default Curiosities