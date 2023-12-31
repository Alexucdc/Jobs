/* eslint-disable eqeqeq */
import { useState} from 'react';
import axios from 'axios';
import { useNavigate }  from 'react-router-dom';
import  "./credentials.css"

export const CredentialsPage =(props) =>{

    /* Registro*/

    const [nameRegister, setNameRegister]=useState("");
    const [emailRegister, setEmailRegister]=useState("");
    const [passwordRegister, setPasswordRegister]=useState("");
    const [confirmPasswordRegister, setConfirmPasswordRegister]=useState("");

    const [emailLogin, setEmailLogin]=useState("");
    const [passwordLogin, setPasswordLogin]=useState("");
    const navigate = useNavigate();

    const registerUser= async () => {
        if(nameRegister == "" || emailRegister == "" || passwordRegister == "" || confirmPasswordRegister == ""){
            alert("Llene el formulario de registro");
            return;
        }

        if(passwordRegister != confirmPasswordRegister){
            alert("Las contraseñas no son iguales");
            return;
        }
        try{
            var obj = {
                "name": nameRegister,
                "email": emailRegister,
                "password": passwordRegister
            };
            
            var response = await axios.post("http://localhost:8000/api/user/register", obj);
            if(response.status != 200){
                alert("Hubo un error");
                return;
            }

            alert("Se registro correctamente");
        }catch(e){
            alert(e.response.data.message);
        }
    }
    const loginUser = async () => {
        if(emailLogin == "" || passwordLogin == ""){
            alert("Llene el formulario de Login");
            return;
        }

        var obj = {
            "email": emailLogin,
            "password": passwordLogin
        };

        try{
            var result = await axios.post("http://localhost:8000/api/user/login", obj);
            localStorage.setItem("jwt", result.data);
            localStorage.setItem("isLogged", true);
            navigate("/admin");
        }catch(e){
            alert("Usuario o contraseña invalidos");
        }
    }





    return (
        
        <div className='General'>
            <h1 className='title'>Find Job</h1>
            <h2>Register</h2>
            <div>
                
                <label>Name</label>
                <br />
                <input type="text" value={nameRegister} onChange={(e) => setNameRegister(e.target.value)}/>
                <br />
                <label>Email</label>
                <br />
                <input type="email" value={emailRegister} onChange={(e) => setEmailRegister(e.target.value)}/>
                <br />
                <label>Password</label>
                <br />
                <input type="password" value={passwordRegister} onChange={(e) => setPasswordRegister(e.target.value)}/>
                <br />
                <label>Confirm Password</label>
                <br />
                <input type="password" value={confirmPasswordRegister} onChange={(e) => setConfirmPasswordRegister(e.target.value)} />
                <br />
                <button onClick={registerUser}>Register</button>
            </div>

            <h1>Login</h1>
            <div>
                <label>Email</label>
                <br />
                <input type="email" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)}/>
                <br />
                <label>Password</label>
                <br />
                <input type="password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)}/>
                <br />
                <button onClick={loginUser}>Login</button>
            </div>
        </div>
    );
};