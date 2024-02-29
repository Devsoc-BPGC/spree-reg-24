import React from 'react'
import ReactDOM from 'react-dom/client'
import Rapp from './Rapp.jsx'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Lapp from './Lapp.jsx'
import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <Lapp/>
        }
      />
      <Route path="register" element={<Rapp/>} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;