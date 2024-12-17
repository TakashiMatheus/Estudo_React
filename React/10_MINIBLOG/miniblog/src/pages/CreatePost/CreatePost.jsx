import style from "./CreatePost.module.css"
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from "../../hooks/useInsertDocument"


const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")
    const {user} = useAuthValue()

    const {insertDocument, response} = useInsertDocument("posts")

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError("")

        // validate URL image
        try{
            new URL(img)
        } catch(error) {
            setFormError("A imagem precisa ser um URL.")
        }

        if(formError) return
        // criar o arrray de tags

        //checar todos os valores
        insertDocument({
            title, 
            img,
            body,
            tags,
            uid: user.uid,
            createdBy: user.displayName
        })

        //redirect to home page
    }

    return(
        <div className={style.create_post}>
            <h2>Criar Post</h2>
            <p>Compartilhe suas experiências!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título</span>
                    <input type="text" name="title" required placeholder="Título para seu post..." onChange={(e) => setTitle(e.target.value)} value={title}/>
                </label>

                <label>
                    <span>Url</span>
                    <input type="text" name="url" required placeholder="Url da imagem" onChange={(e) => setImg(e.target.value)} value={img}/>
                </label>
                <label>
                    <span>Conteúdo</span>
                    <textarea name="body" required placeholder="Insira o conteúdo do post" onChange={(e) => setBody(e.target.value)}></textarea>
                </label>
                <label>
                    <span>Tags</span>
                    <input type="text" name="tags" required placeholder="Insira as tags separadas por vírgulas" onChange={(e) => setTags(e.target.value)} value={tags}/>
                </label>
                {!response.loading && <button className="btn">Cadastrar</button>}
                {response.loading && <button className="btn" disabled>Aguarde...</button>}
                {response.error && <p className="error">{response.error}</p>}
                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    )
}

export default CreatePost