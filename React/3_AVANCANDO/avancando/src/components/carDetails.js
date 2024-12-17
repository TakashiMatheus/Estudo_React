const CarDetails = ({brand, km, color, newCar}) => {
    return(
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>A marca é: {brand}</li>
                <li>Quilometragem: {km}</li>
                <li>Cor: {color}</li>
                {newCar && <p>Esse carro é novo!</p>}
            </ul>
        </div>
    )
}

export default CarDetails