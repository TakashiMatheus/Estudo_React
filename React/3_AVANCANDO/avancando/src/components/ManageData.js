import {useState} from "react"

const ManageData = () => {
    let somaData = 10;
    const [number, setNumber] = useState(15)

    return ( 
        <div>
            <div>
                <p>Valor: {somaData}</p>
                <button onClick={() => (somaData=15)}>Mudar valor </button>
            </div>
            <div>
                <p>Valor: {number} </p>
                <button onClick={() => (setNumber(20))}>Mudar Valor para 20</button>
            </div>
        </div>
    )

}

export default ManageData;