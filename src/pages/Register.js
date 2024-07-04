import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";
import { Alert } from "../components/Alert";
import { Link } from "wouter";
import { Button } from "../components/Button";


export const Register = () => {
  const { message, registerUser, clearErrorMessage, isError} = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div
      className="container-fluid vh-100 "
      style={{ backgroundColor: "#4cbcbf" }}
    >
      <div className="row h-100 ">
        <div className="col-12 col-md-8 offset-md-2 d-flex align-items-center ">
          <div className="card mb-3 p-1">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  className="img-fluid rounded-start"
                  src={require("../assets/cover_tiny.jpg")}
                  width="100%"
                  alt="cover"
                />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body text-center">
                  <h5 className="card-title">Registro</h5>
                  <p className="form-text">
                    Completa los siguientes campos con un email y una contraseña.
                  </p>
             
                  <form action="" className="d-flex flex-column mb-4" onClick={clearErrorMessage} >
                    <div className="mb-3">
                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" className="form-control"/>
                    </div>
                    <div className="mb-3">
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Contraseña" className="form-control"/>
                    </div>
                    <Button type="submit" size="normal" handle={async(e)=>{
                                                                  e.preventDefault();
                                                                  await registerUser({email ,password})}} text="Registrarse"/>
                  </form>
                  {message && <Alert message={message} isError={isError}/>}
                   <Link href="/" onClick={clearErrorMessage}>¿Ya sos usuario? ¡Inicia sesión por aquí!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};