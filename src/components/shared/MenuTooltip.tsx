import { Menu } from "@/types/menu.types";
import { TooltipContent } from "../ui/tooltip";

const MenuTooltip = ({ menu }: { menu: Menu }) => {
  return (
    <TooltipContent className="tooltip" side="right">
      {menu.submenu ? (
        menu.submenu.map((submenu, i) => (
          <a key={`${menu.id}-${i}`} onClick={() => console.log(submenu.link)}>
            <span>{submenu.title}</span>
          </a>
        ))
      ) : (
        <p>{menu.title}</p>
      )}
    </TooltipContent>
  );
};

export default MenuTooltip;
