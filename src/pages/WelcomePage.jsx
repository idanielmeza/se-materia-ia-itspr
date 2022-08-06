import {Link} from 'react-router-dom';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WelcomePage () {
  return (
    <>
    <NavBar/>
    <div className='w-11/12 mx-auto bg-white rounded-lg shadow-md p-4 h-fit m-40'>
      <div className='flex flex-col justify-center items-center'>
        <p className='font-bold text-xl my-5'>Bienvenido al test para seleccion de carrera del itspr</p>
        <p className='font-bold text-3xl my-5 text-red-900'>Angel Daniel Lope San Martin NO HIZO NADA REPRUEBENLO</p>
        <Link to='/questions' className='p-4 bg-red-800 rounded-lg font-bold text-white shadow-md hover:shadow-lg hover:bg-red-900'>Iniciar Test</Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}
