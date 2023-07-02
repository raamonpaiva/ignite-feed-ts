import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import Avatar from './Avatar'
import Comment from './Comment'
import styles from './Post.module.css'

/** Import de outras bibliotecas */
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

/** Interface Typescrypt */
interface Author {
    name: string,
    occupation: string,
    avatarUrl: string,
}

interface Content {
    type: 'paragraph' | 'link',
    content: string
}

interface PostProps {
    author: Author,
    publishedAt: Date,
    content: Content[],
}

/** Pra não ter que ficar digitando props. + a propriedade, utiliza desestruturação e pega logo
 * as propriedades definidas no vetor posts em App.jsx
 */
function Post({author, publishedAt, content}:PostProps){

    const [comments,setComments] = useState([
        'Post bacana hein?'
    ])


    const [newCommentText,setNewCommentText] = useState('')

    /** Checar a documentação do metodo format do dateFNS */
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{ locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent){
        /** Evita o comportamento padrão do html de jogar o usuario para outra pagina */
        event.preventDefault()

        /** event.target retorna o elemento que tá recebendo o evento, e com isso é possivel pegar
         * o seu valor com o name= do elemento + o value, que seria o texto digitado.
         */
        // const newCommentText = event.target.textAreaComment.value

        /** Os 3 pontos significa que vai ser lidos os valores da variavel comment e vai ser copiado  */
        setComments([...comments,newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement> ){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
       event.target.setCustomValidity('Este Campo É Obrigatório') 
    }

    /** Comunicação de Componentes
     *  Como o componente Post é quem tem a informação do estado dos comentarios,
     *  é a partir dela que vai ser exportada a função de delete comments.
     */
    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            /** Quer manter na lista apenas os comentarios diferentes
             * do comentario a ser deletado. O filter vai gerar uma nova
             * lista sem o comentário deletado.
             */
            return comment !== commentToDelete 
        })

        setComments(commentsWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            {/* Cabeçalho do Post contendo o avatar e a hora de publicação */}
            <header className={styles.headerPost}>
                
                <div className={styles.author}>
                   <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.occupation}</span>
                    </div>
                </div>

                <time className={styles.time} title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>

            </header>

            {/* Conteudo do Post em si */}

            <div className={styles.content}>
                {content.map(linha => {
                    if(linha.type === 'paragraph'){
                        // Bota a key apenas no primeiro elemento que aparecer de um retorno de um map                   
                        return <p key={linha.content} >{linha.content}</p>
                    } else if(linha.type === 'link'){
                    
                        return <p key={linha.content} ><a href="#">{linha.content}</a></p>
                    }
                })}
            </div>


            {/* Seção de comentários */}

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>

                <textarea  
                    name='textAreaComment' 
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    required
                    onInvalid={handleNewCommentInvalid}    
                ></textarea>

                <footer >
                    <button 
                        type="submit"
                        disabled={newCommentText.length === 0}
                    >
                        Publicar
                    </button>
                </footer>
                
            </form>


            <div className={styles.commentList}>
                {comments.map(comentario => {
                    /** Envia a função de deletar comentário (deleteComment) como uma propriedade */
                    return (
                        <Comment 
                            key={comentario} 
                            content={comentario} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>


        </article>
    )
}

export default Post