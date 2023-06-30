import Avatar from './Avatar'
import styles from './Sidebar.module.css'

/** Import dos icones do phospor react */
import { PencilLine } from '@phosphor-icons/react'

function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            {/* Todos os componentes da Sidebar */}

            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"  
            />

            
            <div className={styles.profile}>
                <Avatar src="http://github.com/raamonpaiva.png" />
                <strong className={styles.strong}>Raamon Paiva</strong>
                <span className={styles.span}>Web Development</span>
            </div>


            <footer className={styles.footer}>
                <a className={styles.a} href="#">
                    {/* É possivel definir o tamanho do icone do phosphor */}
                    <PencilLine size={20} />
                    Editar Seu Perfil
                </a>
            </footer>
        </aside>
    )
}

export default Sidebar