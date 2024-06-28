import '@/assets/scss/_navbar.scss';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

const VerticalNavbar = () => {
  return (
    <nav className="navbar">
      <div className="md:h-16 h-28 flex items-center border-b justify-between flex-wrap md:flex-nowrap">

        {/* menu burger */}
        <Button className='btn-menu'>
          <Menu />
        </Button>


        {/* Login ------------------------------------- */}
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Avatar className='cursor-pointer'>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className='px-2 mt-2'>
            <DropdownMenuLabel>
              <span>Federico López</span>
              <p>fede.xavier@icloud.com</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Profile
              </DropdownMenuItem>
            <DropdownMenuItem>Cerrar Sessión</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}


export default VerticalNavbar