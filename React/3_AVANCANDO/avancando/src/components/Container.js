const Container = ({children, myValue}) => {
    return (
        <div>
            <h1>Este é meu Container</h1>
            {children}
            <h2>O valor é: {myValue}</h2>
        </div>
    )
}

export default Container;