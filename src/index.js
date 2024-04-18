import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import  Abt from  "./pages/About.jsx"
import  Jobs from  "./pages/jobs.jsx"
import  Modals from  "./pages/modals.jsx"






import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Projects from './pages/Projects.jsx';
import Services from './pages/services.jsx';
import About from './pages/About.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />}>
    <Route index element={<Home/>}/>
    <Route path="projects" element={<Projects/>}/>
    <Route path="about-us" element={<Abt/>}/>

    <Route path="services" element={<Services/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="jobs" element={<Jobs/>}/>
    <Route path="modals/:ok" element={<Modals/>}/>





   
  </Route>)
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App  />

    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
