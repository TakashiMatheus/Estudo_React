// import {useContext} from 'react'
// import {CounterContext} from '../context/CounterContext'
import ChangeCounter from '../components/ChangeCounter'

// refatorando com hook(context)
import { useCounterContext } from '../hooks/useCounterContext'

// Context mais complexo 
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
//    const {counter} = useContext(CounterContext)
    const {counter} = useCounterContext()

    const {color , dispatch } = useTitleColorContext()

    const setTitleColor = (color) => {
        dispatch({type: color})
    }

    return (
        <div>
            <h1 style={{color: color}}>Estou na home </h1>
            <p>Valor do contador : {counter}</p>
            {/*Alterando valor contexto  */}
            <ChangeCounter/>
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
            </div>
        </div>
    )
}

export default Home