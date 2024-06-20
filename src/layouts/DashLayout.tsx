import Sidebar from '@/components/shared/Sidebar';
import { Outlet } from 'react-router-dom';
import '@/assets/scss/admin.scss';


export default function VerticalLayout() {
  return (
    <div className='flex flex-auto flex-col'>
      <div className="flex flex-auto win-w-0">
        <Sidebar></Sidebar>

        <section className=''>
          <Outlet></Outlet>
        </section>
      </div>
    </div>
  );
}

