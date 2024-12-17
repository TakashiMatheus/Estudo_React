import { useCounterContext } from "../hooks/useCounterContext"

const About = () => {
    const {counter} = useCounterContext();

    return (
        <div>
            Estou na sobre
            <p>Valor do contador: {counter}</p>
        </div>
    )

}

export default About