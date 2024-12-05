
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";
import { CentroDeInovacao } from "../pages/Public/CentroDeInovacao";
import { DetalhesCentroDeInovacao } from "../pages/Public/CentroDeInovacao/DetalhesCentroDeInovacao";


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
    }
    
]);

export default router;