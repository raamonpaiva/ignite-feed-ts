import styles from './Avatar.module.css'

interface AvatarProps{
    hasBorder?: boolean,
    src: string,
}


/** Em vez de passar a props diretamente, é necessario tirar as propriedades hasBorder e src
 * para poder definir o hasBorder como true por default e definir as propriedades como falso
 * nos componentes que não deseja as bordas.
 */
function Avatar({hasBorder=true,src}:AvatarProps){
    return (
        <img className={hasBorder ? styles.avatarWithBorder:styles.avatar} src={src}/>
    )
}

export default Avatar