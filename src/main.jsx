import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from '../redux';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import DMs from './DMs.jsx';
import Navbar from './Navbar.jsx';
import Email from './Email.jsx';
import Header from './Header.jsx';
import Root from './routes/root.jsx';
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/dm",
        element: <DMs></DMs>
      },
      {
        path: "/email",
        element: <Email></Email>
      },
    ],
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
