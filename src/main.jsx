import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import About from './About.jsx';
import ContactUs from './ContactUs.jsx';
import Github, { githubInfoLoader } from './Github.jsx';
import Home from './Home.jsx';
import Layout from './Layout';
import NotFound from './NotFound.jsx';
import User from './User.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<ContactUs />} >
        <Route path='user/:userId' element={<User />} />
      </Route>
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
