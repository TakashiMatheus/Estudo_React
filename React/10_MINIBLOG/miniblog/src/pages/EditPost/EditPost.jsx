import style from "./EditPost.module.css"
import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useUpdateDocument } from "../../hooks/useUpdateDocument"
import { useFetchDocument } from "../../hooks/useFetchDocument"

const EditPost = () => {
    const {id} = useParams()
    const {document:post} = useFetchDocument("posts", id)

    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    useEffect(() => {
        if(post) {
            setTitle(post.title)
            setBody(post.body)
            setImg(post.img)
            const textags = post.tagsArray.join(", ");

            setTags(textags)
        }
    }, [post])

    const {user} = useAuthValue()

    const {updateDocument, response} = useUpdateDocument("posts")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError("")

        // validate URL image
        try{
            new URL(img)
        } catch(error) {
            setFormError("A imagem precisa ser um URL.")
        }

        // criar o arrray de tags
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase()) 


        //checar todos os valores
        if(!title || !img || !tags || !body){
            setFormError("Por favor preencha todos os campos!")
        }


        if(formError) return

        const data = {
        
                title, 
                img,
                body,
                tagsArray,
                uid: user.uid,
                createdBy: user.displayName
            
        }
        updateDocument(id, data)

        //redirect to home page
        navigate("/dashboard")
    }

    return(
        <div className={style.edit_post}>
            {post && (
                <>
                    <h2>Editando post: {post.title}</h2>
                    <p>Altere os dados do post como desejar!</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Título</span>
                            <input type="text" name="title" required placeholder="Título para seu post..." onChange={(e) => setTitle(e.target.value)} value={title}/>
                        </label>

                        <label>
                            <span>Url</span>
                            <input type="text" name="url" required placeholder="Url da imagem" onChange={(e) => setImg(e.target.value)} value={img}/>
                        </label>
                        <p className={style.preview_title}>Preview da imagem atual:</p>
                        <img className={style.image_preview} src={post.img} alt={post.title}/>
                        <label>
                            <span>Conteúdo</span>
                            <textarea name="body" required placeholder="Insira o conteúdo do post" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                        </label>
                        <label>
                            <span>Tags</span>
                            <input type="text" name="tags" required placeholder="Insira as tags separadas por vírgulas" onChange={(e) => setTags(e.target.value)} value={tags}/>
                        </label>
                        {!response.loading && <button className="btn btn-editar">Editar</button>}
                        {response.loading && <button className="btn" disabled>Aguarde...</button>}
                        {response.error && <p className="error">{response.error}</p>}
                        {formError && <p className="error">{formError}</p>}
                    </form>
                </>
            )}
        </div>
    )
}

export default EditPost