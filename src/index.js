import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './App'
import HTML from '../src/pages/home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: "We Are Sorry",
  },
  {
    path: "/portofolio",
    element: <HTML />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

