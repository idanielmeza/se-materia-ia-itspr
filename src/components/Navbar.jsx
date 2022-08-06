import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to='/' className='bg-red-800 flex justify-start items-center rounded-b-sm shadow-lg px-16 py-2'>
            <img src={Logo} alt='logo' className='w-16 rounded-full shadow-sm'/>
            <h2 className='font-bold text-2lx text-white mx-5'>Insituto Tecnologico Superior de Poza Rica</h2>
    </Link>
  )
}

export default Navbar