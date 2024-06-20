import hero from '@/assets/images/weps/auth.webp'
import logo from '@/assets/images/svgs/logo.svg'
import { Outlet } from 'react-router-dom';



export default function AuthLayout() {



  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-4 min-h-screen content-center">
        <div className="flex flex-col borde-blue-500 justify-center md:px-40">
          <img className='self-center w-52 mb-8' src={logo} alt="logo" />
          <Outlet />
        </div>
        <div className="">
          <img src={hero} alt="auth" />
        </div>
      </div>
    </div>
  );
}

