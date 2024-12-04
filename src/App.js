
import { useEffect, useState } from "react";
import Login from "./views/auth/Login.js"
import Dashboard from './views/dashboard/Dashboard.js'
import { PrimeReactProvider } from 'primereact/api';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthWrapper from "./AuthWrapper.js";

import smsAxios from "./utils/smsAxios.js";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState();

      
                const isValid = async   ()=>{
                  console.log("invalid called");
                  let token = localStorage.getItem('token');
                  if(token){
                    try{
                      let response = await smsAxios.get("/api/auth/verify?token="+token);
                      setIsAuthenticated(true);
                    }
                    catch(err){
                      setIsAuthenticated(false);
                    }
                    
                    
                  }
                  else
                  setIsAuthenticated(false);
                }
                
  useEffect( ()=>{
    isValid();
        },[]);
  return (
    <PrimeReactProvider>


        <BrowserRouter>
        <Routes>
              <Route element={<AuthWrapper isAuthenticated
                                        ={isAuthenticated} />} >
                  <Route path="/" element={<Dashboard />} />
             </Route>
             
                  <Route path="/login" 
                       element={<Login isAuthenticated
                        ={isAuthenticated}  loginSuccess={()=>{setIsAuthenticated(true)}}/>} />
            
             
             
           
         </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;
