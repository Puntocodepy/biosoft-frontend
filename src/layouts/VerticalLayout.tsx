import '@/assets/scss/admin.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/shared/Sidebar';
import VerticalNavbar from '@/components/shared/VerticalNavbar';


export default function VerticalLayout() {
  return (
    <div className='flex flex-auto flex-col'>
      <div className="flex flex-auto win-w-0">
        <Sidebar></Sidebar>

        <section className='w-full border'>
          <VerticalNavbar />
          
          <div className="py-5 px-11">
            <Outlet></Outlet>
          </div>
        </section>
      </div>
    </div>
  );
}

