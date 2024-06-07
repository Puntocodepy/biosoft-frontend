import logo from '@/assets/images/svgs/logo.svg'
import Sidebar from '@/components/shared/Sidebar';
import { Outlet } from 'react-router-dom';



export default function AdminLayout() {



  return (
    <div className="flex">
        <Sidebar />
      
      {/* <div className="grid grid-cols-2 gap-4 min-h-screen content-center">
        <div className="flex flex-col borde-blue-500 justify-center md:px-40">
          <img className='self-center w-52 mb-8' src={logo} alt="logo" />
          <Outlet />
        </div>

      </div> */}
    </div>
  );
}

