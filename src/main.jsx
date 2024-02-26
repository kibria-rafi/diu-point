import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './root/Route';
import Home from './page/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
