import { useFetchDocument } from "../../hooks/useFetchDocument"
import styles from "./Posts.module.css"

import { useParams } from "react-router-dom"

const Posts = () => {
    const { id } = useParams()
    const {document:post, loading} = useFetchDocument("posts", id)

    return (
        <div className={styles.post_container}>
            {loading && <p>Carregando Post...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.img} alt="Imagem do post"/>
                    <p>{post.body}</p>
                    <h3>Este post trata sobre:</h3>
                    <div className={styles.tags}>
                        {post.tagsArray.map((tag) => (
                            <p key={tag}>
                                <span>#</span>
                                {tag}
                            </p>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Posts