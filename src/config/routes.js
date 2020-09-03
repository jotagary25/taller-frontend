//importamos los layouts
import LayoutUser from "../layouts/LayoutUser";
import LayoutBasic from "../layouts/LayoutBasic";

//importamos las paginas de User
import PageUser from "../pages/User/index";
import PageSignIn from "../pages/User/SignIn";
import GestionarUsuario from "../pages/User/GestionarUsuario";
import GestionarPrivilegio from "../pages/User/GestionarPrivilegio";
import GestionarCliente from "../pages/User/GestionarCliente";

//importamos las páginas comunes
import PageContact from "../pages/Contact";
import PageHome from "../pages/Home";
import PageError404 from "../pages/Error404";

const routes = [
  {
    path: "/user",
    exact: false,
    component: LayoutUser,
    routes: [
      {
        path: "/user",
        exact: true,
        component: PageUser,
      },
      {
        path: "/user/login",
        exact: true,
        component: PageSignIn,
      },
      {
        path: "/user/gestionarusuario",
        exact: true,
        component: GestionarUsuario,
      },
      {
        path: "/user/gestionarprivilegio",
        exact: true,
        component: GestionarPrivilegio,
      },
      {
        path: "/user/gestionarcliente",
        exact: true,
        component: GestionarCliente,
      },
      {
        component: PageError404,
      },
    ],
  },
  {
    path: "/",
    exact: false,
    component: LayoutBasic,
    routes: [
      {
        path: "/",
        exact: true,
        component: PageHome,
      },
      {
        path: "/contact",
        exact: true,
        component: PageContact,
      },
      {
        component: PageError404,
      },
    ],
  },
];

export default routes;
