import './MyForm.css'

import {useState} from 'react'

const MyForm = (user) => {
    // 6 - controlled inputs
    
    
    // 3 = gerenciamento de dados
    const [name, setName] = useState(user ? user.name: '')
    const [email, setEmail] = useState(user ? user.email: '')

    const [bio, setBio] = useState("")
    const [role, setRole] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Envio do formulário confirmado")
        console.log(name, email, bio, role)

        //  validacao 
        //  envio 


        // 7 - Limpar form
        setEmail("")
        setName("")
    }

    // console.log(name)
    // console.log(email)

    return(
        <div>
            {/*5 - Envio de form */}
            {/*1 - criacao do form*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
                </div>
                {/* 2 - label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    {/*4 - Simplificação de manipulação de state */}
                    <input type="email" name="email" placeholder="Informe o seu email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </label>
                {/* 8 - textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea name='bio' placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                {/* 9 - select */}
                <label>
                    <span>Função no sistema</span>
                    <select name='role'onChange={(e) => setRole(e.target.value)}>
                        <option value='user'>Usuário</option>
                        <option value='editor'>Editor</option>
                        <option value='admin'>Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar"/>
            </form>

        </div>
    )
}

export default MyForm