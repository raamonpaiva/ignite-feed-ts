// Este arquivo vai montar a aplicação em si, com todos os modulos sendo importados aqui

/** Import do componentes */
import Header from './components/Header.tsx'
import Sidebar from './components/Sidebar.tsx'
import Post from './components/Post.tsx'

/** Import dos CSS */
import './global.css'
import styles from './App.module.css'

/** Informações que vão mudar de usuario para usuario:
 * 
 *  author: {avatarUrl: "", name: "", occupation: ""} - Autor que contem avatar,nome e cargo
 *  publishedAt: Date - Data de publicação
 *  content: String - O conteúdo do post em si.
 */


const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "http://github.com/raamonpaiva.png",
            name: "Raamon Paiva",
            occupation: "Full Stack Dev" 
        },
        content: [
            {type: 'paragraph', content: 'Fala Galera!'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no portifolio'},
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2023-05-31 16:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: "http://github.com/maykbrito.png",
            name: "Mayk Brito",
            occupation: "Full Stack Dev" 
        },
        content: [
            {type: 'paragraph', content: 'Fala Galera!'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no portifolio'},
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2023-05-10 20:00:00')
    }
]

function App() {
    return (
        <div>
            <Header />
            
            {/* Esse é a div do painel lateral, e usa o aside */}
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map(post => {
                        return (
                            // Bota a key apenas no primeiro elemento que aparecer de um retorno de um map
                            <Post
                                key={post.id} 
                                author={post.author}
                                content={post.content as []}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}                                                      
                </main>
            </div>
        </div>
    )
}

export default App

