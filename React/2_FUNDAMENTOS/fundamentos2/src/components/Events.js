const Events = () => {
    const handleMyEvent = () =>{
        console.log("Ativou o evento!")
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Estou renderizando quando true</h1>
        }
        else{
            return <h1>Estou renderizando quando false</h1>
        }
    };


    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => {console.log("Clicou!!!!!!!")}}>Clique aqui também!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
}

export default Events;