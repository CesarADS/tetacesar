
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Public/index";
import { CentroDeInovacao } from "../pages/Public/CentroDeInovacao";
import { DetalhesCentroDeInovacao } from "../pages/Public/CentroDeInovacao/DetalhesCentroDeInovacao";
import { AdminHome } from "../pages/Admin";
import { ParquesCientificos } from "../pages/Public/ParquesCientificos";
import { DetalhesParquesCientificos } from "../pages/Public/ParquesCientificos/DetalhesParquesCientificos";
import { DetalhesCoworkings } from "../pages/Public/Coworkings/DetalhesCoworkings";
import { Coworkings } from "../pages/Public/Coworkings";
import { EditCentroDeInovacaoAdmin } from "../pages/Admin/CentroDeInovacaoAdmin/EditCentroDeInovacao";
import { CentroDeInovacaoAdmin } from "../pages/Admin/CentroDeInovacaoAdmin";
import { AdicionarCentroDeInovacaoAdmin } from "../pages/Admin/CentroDeInovacaoAdmin/AdicionarCentroDeInovacao";


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
      element: <Coworkings></Coworkings>,
    },
    {
      path: '/detalhes-coworking/:id',
      element: <DetalhesCoworkings></DetalhesCoworkings>,
    },
    {
      path: '/parques-cientificos',
      element: <ParquesCientificos></ParquesCientificos>,
    },
    {
      path: '/detalhes-parque-cientifico/:id',
      element: <DetalhesParquesCientificos></DetalhesParquesCientificos>,
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
      element: <CentroDeInovacaoAdmin></CentroDeInovacaoAdmin>,
    },
    {
      path: "/centros-de-inovacao-admin/:id",
      element: <EditCentroDeInovacaoAdmin></EditCentroDeInovacaoAdmin>,
    },
    {
      path: "/centros-de-inovacao-admin/adicionar",
      element: <AdicionarCentroDeInovacaoAdmin></AdicionarCentroDeInovacaoAdmin>,
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