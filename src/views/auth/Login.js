
import './Login.css';
import {  Button } from 'primereact/button'; 
import { InputText } from 'primereact/inputtext'; 
import { Checkbox } from 'primereact/checkbox'; 
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom'

function Login(props) {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");

    const doLogin = async ()=>{
        try{
            let response = await axios.post('/api/auth/login',{
                username:username,
                password:password
            });
            setError("");
            console.log(response);
            localStorage.setItem("token",response?.data?.data);
            props.loginSuccess();
            navigate('/');

        }
        catch(err){
            console.log(err);
            setError("Invalid credentials");
        }
    }
  return (
    <>
    {props.isAuthenticated == true ? <Navigate to="/" /> :(props.isAuthenticated == false ?
    
    <div className="px-5 min-h-screen flex justify-content-center align-items-center">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
            <img src="https://picsum.photos/50" alt="hyper" height={50} className="mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">SMS Login</div>
            <span className="text-600 font-medium line-height-3">Don't have an account?</span>
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>

        <div>
            <label htmlFor="username" className="block text-900 font-medium mb-2">Username</label>
            <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className="w-full mb-3" />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Password" className="w-full mb-3" />

            <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                    <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                    <label htmlFor="rememberme">Remember me</label>
                </div>
                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
            </div>

            {
                error?
                <div className="flex align-items-center justify-content-between mb-3">
                    <span className="font-medium no-underline ml-2 text-red-500 text-right cursor-pointer">{error}</span>
                </div>
                :""
            }

            <Button label="Sign In" icon="pi pi-user" disabled={(username && password?false:true)} 
                onClick={doLogin} className="w-full" />
        </div>
    </div>
</div>
:"")}
</>
  );
}

export default Login;
