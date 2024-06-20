import { AreaChart, Contact, Landmark, Truck, User,  } from "lucide-react";

export function getMenu() {
    return [
        { 
          id: 1,
          title: 'Dashboard', 
          link: '/',
          icon: <AreaChart /> 
        },
        { 
          id: 2,
          title: 'Empresa', 
          link: '/company', 
          icon: <Contact />,
          submenu: [
            { title: 'Agenda', link: '/company/diary' },
            { title: 'Clientes', link: '/company/clients' },
            { title: 'Cuentas', link: '/company/accounts' },
            { title: 'Proveedores', link: '/company/providers' },
            { title: 'Servicios', link: '/company/services' },
            { title: 'Contratos', link: '/company/contracts' },
          ]
        },
        { 
          id: 3,
          title: 'Stock', 
          link: '/stock',
          icon: <Truck />
        },
        {
          id: 4,
          title: 'Finanzas',
          link: '/finances',
          icon: <Landmark />,
          submenu: [
            { title: 'Operaciones', link: '/finances/operations' },
            { title: 'Categorias', link: '/finances/category' },
            { title: 'Sub Categorias', link: '/finances/sub-category' },
            { title: 'Estadisticas', link: '/finances/stadistics' },
          ]
        },
        {
          id: 5,
          title: 'Usuarios',
          link: '/users',
          icon: <User />
        },
      ];
  }