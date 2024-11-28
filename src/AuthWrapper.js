
import { useEffect } from "react";
import Login from "./views/auth/Login.js"
import Dashboard from './views/dashboard/Dashboard.js'
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate, Outlet } from 'react-router-dom'

function AuthWrapper(props) {
    console.log("AuthWrapper called");
//   const navigate = useNavigate();
//     useEffect(()=>{

//       let token = localStorage.getItem('token');
//       if(!token){

//         navigate("/login");
//       }
//     });
  return (
  
  
        props.isAuthenticated == false ? 
        <Navigate to="/login" /> :(props.isAuthenticated == true? <Outlet />:"")
    
        // <Routes>
        //     <Route path="/" element={<Dashboard />} />
        //     <Route path="/login" element={<Login />}>
        //   </Route>
        // </Routes>

  );
}

export default AuthWrapper;
