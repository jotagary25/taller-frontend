//importamos los layouts
import LayoutUser from "../layouts/LayoutUser";
import LayoutBasic from "../layouts/LayoutBasic";

//importamos las paginas de User
import PageUser from "../pages/user/index";
import PageSignIn from "../pages/user/SignIn";

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
