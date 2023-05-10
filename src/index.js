import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/layout/App/App';
import Home from './component/page/Home/Home';
import Cart from './component/page/Cart/Cart';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} >
    <Route index  element ={<Home/>} />
    <Route path='cart' element={<Cart/>}/>
  
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

