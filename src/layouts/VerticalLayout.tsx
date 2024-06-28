import '@/assets/scss/admin.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/shared/Sidebar';
import VerticalNavbar from '@/components/shared/VerticalNavbar';
import { useState } from 'react';


export default function VerticalLayout() {
  const [isOpen, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className='flex flex-auto flex-col'>
      <div className="flex flex-auto win-w-0">
        <Sidebar isOpen={isOpen}></Sidebar>

        <section className='w-full border'>
          <VerticalNavbar setOpen={toggleMenu}/>
          
          <div className="py-5 px-11">
            <Outlet></Outlet>
          </div>
        </section>
      </div>
    </div>
  );
}

