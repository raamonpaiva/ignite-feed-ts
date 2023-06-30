// Este arquivo vai apenas renderizar o arquivo App.jsx e vai ser importado no index.html

/** 'react' contém o core base do react que pode ser utilizado em varias plataforma,
 * como por exemplo, mobile, tvs, etc.
 */
import React from 'react'
/** 'react-dom/client' é a biblioteca especifica do react para web */
import ReactDOM from 'react-dom/client'
import App from './App'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
