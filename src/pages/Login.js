import React from "react";
import { ButtonGoogleSignin } from "../components/buttons/ButtonGoogleSignin";

export const Login = () => {
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
                  <h5 className="card-title">Bienvenido</h5>
                  <p className="card-text">
                    Comenzá a administrar tu presupuesto personal.
                  </p>
                  <ButtonGoogleSignin />
                  <small className="text-secondary">
                    *Tu dirección de correo se almacenará en la base de datos.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
