const UserDetails = ({nome, idade, profissao}) => {


    return (
        <div>
            <h1>Usuário </h1>
            <p>O nome é: {nome}</p>
            <p>O nome é: {idade}</p>
            <p>O nome é: {profissao}</p>
            {idade > 18 ? (<p>O usuário pode dirigir!</p>) : (<p>Menor de idade</p>)}
        </div>
    )
}

export default UserDetails