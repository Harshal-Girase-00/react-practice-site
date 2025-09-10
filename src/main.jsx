import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import './index.css'
import AdminLogin from './components/AdminLogin';
import Userlogin from './components/UserLogin';
import Registre from './components/Register';

const router= createBrowserRouter([
{path:"/" ,element:<Home/>},
{path:"/user-login" ,element:<Userlogin/>} ,  
{path:"/admin-login" ,element:<AdminLogin/>} ,
{path:"/register" ,element:<Registre/>} 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
