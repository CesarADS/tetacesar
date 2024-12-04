
import { createBrowserRouter } from "react-router-dom";
import { Page } from "../pages";


const router = createBrowserRouter([
    {
      path: "/",
      element:  <Page></Page>,
    },
    {
      path: '/CentroDeInovacao',
      element: <Page></Page>,
    }
    
]);

export default router;