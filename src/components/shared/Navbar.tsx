import logo from '@/assets/images/svgs/logo.svg'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';

const Navbar = () => {
  return (
    <nav className="w-100">
      <div className="md:h-16 h-28 flex items-center justify-between flex-wrap md:flex-nowrap">

        {/* Logo ------------------------------------- */}
        <img src={logo} className="w-32" alt="logo" />


        {/* Menu ------------------------------------- */}
        <div className="">
          <ul className="flex font-semibold justify-between">

            <li className="md:px-4 md:py-2 text-indigo-500"><a href="#">Dashboard</a></li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Search</a></li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Explore</a></li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">About</a></li>
            <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
          </ul>
        </div>


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


export default Navbar