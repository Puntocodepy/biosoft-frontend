import logo from '@/assets/images/svgs/logo.svg'
import { AreaChart, ArrowBigDown, ChevronDown, CircleArrowLeft } from "lucide-react";
import { useState } from "react";
import '@/assets/scss/admin.scss';


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: 'Dashboard', link: '/', icon: <AreaChart /> },
    { title: 'Projects', link: '/projects', Icon: <ArrowBigDown /> },
    { title: 'Stock', link: '/stock', separetor: true },
    {
      title: 'Settings',
      link: '/settings',
      separetor: true,
      submenu: [
        { title: 'Profile', link: '/settings/profile' },
        { title: 'Change Password', link: '/settings/password' },
        { title: 'Notifications', link: '/settings/notifications' },
      ]
    },
    { title: 'Dashboard', link: '/', icon: <AreaChart /> },
    { title: 'Dashboard', link: '/', icon: <AreaChart /> },
    { title: 'Dashboard', link: '/', icon: <AreaChart /> },
    { title: 'Dashboard', link: '/', icon: <AreaChart /> },
    { title: 'Dashboard', link: '/', icon: <AreaChart /> },
    {
      title: 'Settings',
      link: '/settings',
      separetor: true,
      submenu: [
        { title: 'Profile', link: '/settings/profile' },
        { title: 'Change Password', link: '/settings/password' },
        { title: 'Notifications', link: '/settings/notifications' },
        { title: 'Notifications', link: '/settings/notifications' },
        { title: 'Notifications', link: '/settings/notifications' },
        { title: 'Notifications', link: '/settings/notifications' },
      ]
    },
  ];

  return (
    <div className={`sidebar ${open ? "" : "sidebar-close"}`}>
      <CircleArrowLeft
        className={`absolute text-white -right-3 top-4 ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />

      {/* LOGO------------------------------ */}
      <div className="flex gap-x-4 items-center justify-center">
        <img src={logo} className='' alt="logo" width={150} />
      </div>
      <div className='border-b border-blue-700 mt-4'></div>

      {/* Menu------------------------------ */}
      <ul className="pt-6">
        {Menus.map((menu, i) => (
          <>
            <li 
             className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-800 rounded-md" 
             key={i}>
              {menu.icon ?? <CircleArrowLeft />}
              <span className={` ${!open && "hidden"}`}>{menu.title}</span>
              {menu.submenu && open && (
                <ChevronDown
                  className={`absolute right-4 duration-200 size-4 ${!submenuOpen ? 'rotate-180' : ''}`} 
                  onClick={() => setSubmenuOpen(!submenuOpen)}/>
              )}
            </li>
            
            {/* submenu----------------------- */}
            {menu.submenu && submenuOpen && (
              <ul className={`pl-4 ${!open && "hidden"}`}>
                {menu.submenu.map((submenu, i) => (
                  <li key={i} className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-800 rounded-md">
                    <span>{submenu.title}</span>
                  </li>
                ))}
              </ul>
            )}

            { menu.separetor && <div className='border-b border-blue-700 mt-4'></div> }
          </>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar