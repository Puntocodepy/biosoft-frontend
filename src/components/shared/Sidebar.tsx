import { ChevronDown, CircleArrowRight } from "lucide-react";
import { getMenu } from './Menu';
import { useState } from "react";
import logo from '@/assets/images/svgs/logo.svg'
import favicon from '@/assets/images/svgs/favicon.svg'
import { Tooltip, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import MenuTooltip from './MenuTooltip';


const Sidebar = () => {
  // data--------------------------------------------------------------------------------
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState<{ [key: number]: boolean }>({});
  const Menus = getMenu();

  // Methods-----------------------------------------------------------------------------
  const toggleMenu = () => {
    const newOpenState = !open;
    if (!newOpenState)  setSubmenuOpen({});

    setOpen(newOpenState);
  };

  const toggleSubmenu = (index: number, event: React.MouseEvent) => {
    if(!open) return;

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
    <>
      <CircleArrowRight
        className={`sidebar-toggle ${open && "sidebar-toggle-open"}`}
        onClick={() => toggleMenu()}
      />

      <div className={`sidebar ${open ? "sidebar-open" : "sidebar-close"}`}>
        {/* Header ------------------------------ */}
        <div className="side-nav-header">
          <img src={open ? logo : favicon} alt="logo" />
        </div>
        
        <div className="side-nav-content">
          <div className="menu">
            <div className="content">
              <ul className="items">
                {Menus.map((menu) => (
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>

                      {/* Menu------------------------------------ */}
                      <li 
                        className="menu-item" 
                        key={menu.id} 
                        onClick={ menu.submenu ? (event) => toggleSubmenu(menu.id, event) : () => console.log('menu')} >
                          <TooltipTrigger data-state="instant-open">{menu.icon}</TooltipTrigger>
                          <span className={`${!open && "hidden"}`}>{menu.title}</span>
                          {menu.submenu && open && (
                            <ChevronDown
                              className="absolute right-6 duration-200 size-4" 
                            />
                          )}
                      </li>
                      
                      {/* submenu----------------------- */}
                      {menu.submenu && (
                        <ul className={`submenu ${submenuOpen[menu.id] ? 'submenu-open' : ''}`}>
                          {menu.submenu.map((submenu, i) => (
                            <li key={`${menu.id}-${i}`} onClick={() => console.log(submenu.link)}>
                              <span>{submenu.title}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tooltip----------------------- */}
                      { !open && (
                        <MenuTooltip menu={menu} />
                        // <TooltipContent className='ml-4' side='right'>
                        //   {menu.submenu 
                        //     ? <a>test</a>
                        //     : <p>{menu.title}</p> }
                        // </TooltipContent>
                      )}
                      
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar