import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/layout/App/App';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} index>

  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

