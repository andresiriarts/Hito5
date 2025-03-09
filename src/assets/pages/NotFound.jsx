import { Link } from "react-router-dom"
import notFoundImage from '../img/404Image.jpg'

const NotFound = () => {
  return (
    <main className="container-404">
      <img src={notFoundImage} alt="Pagina no encontrada" className="img404"/>
      <h2>Oops! Página no encontrada.</h2>
      <p>Parece que la página que buscas no existe.</p>
      <Link to='/'>
        Volver al inicio.
      </Link>
    </main>
  )
}

export default NotFound