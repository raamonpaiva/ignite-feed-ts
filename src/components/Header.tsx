/** Componente em React
 * É uma função que retorna html, e utiliza a extensão .jsx
 * Por padrão a primeira letra é maiuscula
 * É instanciado da mesma forma que um componente html: <Header />
 */

/* Para a importação de um CSS module, diferentemente de um .css comum, é necessario dar um nome
ao .module.css importado, neste caso style */
import styles from "./Header.module.css"

/* Importando o logo */
import igniteLogo from "../assets/ignite-logo.svg"

function Header() {
  return (
    /** A utilização do className é necessaria para utilizar um CSS Module em um componente, onde o estilo é
     * setado utilizando o nome dado ao modulo importado(neste caso o Header.module.css foi chamado de style)
     * e um ponto seguido do nome da classe nomeada no arquivo module.css , que no caso foi um .header, logo a
     * chamada do estilo da-se por {style.header}
     *
     */
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  )
}

export default Header
