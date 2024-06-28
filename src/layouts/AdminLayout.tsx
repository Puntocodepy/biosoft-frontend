import Navbar from '@/components/shared/Navbar';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {

  return (
    <div className='container'>
      <Navbar></Navbar>

      <section className='mt-8'>
        <Outlet></Outlet>
      </section>
    </div>
  );
}
