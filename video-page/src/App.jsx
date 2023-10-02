import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,
  Route,Routes,
  createRoutesFromElements,
  RouterProvider
  } from 'react-router-dom'
import Home from './Home'
import Getstarted from './Getstarted'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        
          <Route index element={<Home />} />
       
       
        <Route path="/Getstarted" element={<Getstarted />} />
        
       
        
     
    
      </Route>
    
    )
  );

  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
