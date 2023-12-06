import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
import App from './App';

  const router = createBrowserRouter([
    {
      path: "/",
      // element: <div>Hello world!</div>,
      element: <App />,
    },
  ]);

  const MyRoutes = () =>   <RouterProvider router={router} />

  export default  MyRoutes;