import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import Avatar from './Avatar'
import { useState } from 'react'

/** Tipagem de função segue o exeplo abaixo */
interface CommentProps{
    content: string,
    onDeleteComment: (comment: string) => void;
}

function Comment({content,onDeleteComment}: CommentProps){

    const [likeCount,setLikeCount] = useState(0)

    function handleDeleteComment() {
       onDeleteComment(content)
    }

    function handleLikeComment(){
        /** Forma Simples de Atualizar o valor de likes
         *  setLikeCount(likeCount + 1) 
        */

        /** Forma mais padronizada de retornar o like,
         * sendo possivel pegar o valor mais atualizado dos
         * likes
         */
        setLikeCount((state) => {
            return state +1
        })
        
    }

    return(
        <div className={styles.comment}>
           <Avatar hasBorder={false} src="http://github.com/raamonpaiva.png"/>

            <div className={styles.commentBox}>

                 <div className={styles.commentContent}>

                    <header className={styles.headerContent}>
                        <div className={styles.authorAndTime}>
                            <strong>Raamon Paiva</strong>
                            <time>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{content}</p>
                 </div>

                 <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>

                    </button>
                 </footer>
            </div>
        </div>
    )
}

export default Comment