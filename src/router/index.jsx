
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Public/index";
import { CentroDeInovacao } from "../pages/Public/CentroDeInovacao";
import { DetalhesCentroDeInovacao } from "../pages/Public/CentroDeInovacao/DetalhesCentroDeInovacao";
import { AdminHome } from "../pages/Admin";


const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home></Home>,
    },
    {
      path: '/centros-de-inovacao',
      element: <CentroDeInovacao></CentroDeInovacao>,
    },
    {
      path: '/coworkings',
      element: <Home></Home>,
    },
    {
      path: '/parques-cientificos',
      element: <Home></Home>,
    },
    {
      path: "/detalhes-centro-de-inovacao/:id",
      element: <DetalhesCentroDeInovacao></DetalhesCentroDeInovacao>,
    },
    {
      path: "/admin",
      element: <AdminHome></AdminHome>,
    },
    {
      path: "/centros-de-inovacao-admin",
      element: <Home></Home>,
    },
    {
      path: "/parques-cientificos-admin",
      element: <Home></Home>,
    },
    {
        path: "*",
        element: <Home></Home>,
    }
    
]);

export default router;