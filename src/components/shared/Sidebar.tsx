import { ChevronDown } from "lucide-react";
import { getMenu } from './Menu';
import { useState } from "react";
import logo from '@/assets/images/svgs/logo.svg'
import favicon from '@/assets/images/svgs/favicon.svg'
import { Tooltip, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import MenuTooltip from './MenuTooltip';


const Sidebar = ({isOpen} : {isOpen: boolean, }) => {
  // data--------------------------------------------------------------------------------
  const [submenuOpen, setSubmenuOpen] = useState<{ [key: number]: boolean }>({});
  const Menus = getMenu();

  // Methods-----------------------------------------------------------------------------
  const toggleSubmenu = (index: number, event: React.MouseEvent) => {
    if(!isOpen) return;

    setSubmenuOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));

    const submenu = event.currentTarget.querySelector('ul');
    if (submenu) {
      submenu.classList.toggle('active-class');
    }
  };


  // Views-------------------------------------------------------------------------------
  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-close"}`}>

      <div className="side-nav-header">
        <img src={isOpen ? logo : favicon} alt="logo" />
      </div>
      
      <div className="side-nav-content">
        <div className="menu">
          <div className="content">
            <ul className="items">
              {Menus.map((menu) => (
                <TooltipProvider delayDuration={0} key={menu.id}>
                  <Tooltip>

                    {/* Menu------------------------------------ */}
                    <li 
                      className="menu-item" 
                      key={menu.id} 
                      onClick={ menu.submenu ? (event) => toggleSubmenu(menu.id, event) : () => console.log('menu')} >
                        <TooltipTrigger data-state="instant-open">{menu.icon}</TooltipTrigger>
                        <span className={`${!isOpen && "hidden"}`}>{menu.title}</span>
                        {menu.submenu && isOpen && (
                          <ChevronDown
                            className="absolute right-6 duration-200 size-4" 
                          />
                        )}
                    </li>
                    
                    {/* submenu----------------------- */}
                    {menu.submenu && (
                      <ul className={`submenu ${submenuOpen[menu.id] && isOpen ? 'submenu-open' : ''}`}>
                        {menu.submenu.map((submenu, i) => (
                          <li key={`${menu.id}-${i}`} onClick={() => console.log(submenu.link)}>
                            <span>{submenu.title}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tooltip----------------------- */}
                    { !isOpen && <MenuTooltip menu={menu} /> }
                    
                  </Tooltip>
                </TooltipProvider>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar