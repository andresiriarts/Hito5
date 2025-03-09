import { Link } from "react-router-dom"

const Profile = () => {
  return (
    <main className="container-profile">
      <p className="correo">correoelectronico@mail.com</p>
      <button className="btn-cerrar-sesion"> <Link to='/'>Cerrar sesión</Link></button>
    </main>
  )
}

export default Profile