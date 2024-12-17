const Challenge = () => {
    const numero1 = 1;
    const numero2 = 2;


    return(
        <div>
           <h1>{numero1}</h1>
           <h1>{numero2}</h1>
           <div>
            <h1>
                <button onClick={()=> {console.log(numero1 + numero2)}}>Some os números</button>
            </h1>
           </div>
        </div>
    );
}

export default Challenge