import React, { useEffect } from "react";
import { useAuthStore } from "../../store/authStore";

export const ButtonGoogleSignout = () => {
  const { sign, user, setIsAuthenticated } = useAuthStore();
  useEffect(() => {
    if (window.google) {
      const google = window.google;
      //button sign-out
      const button = document.getElementById("google-signout");
      button.addEventListener("click", () => {
        google.accounts.id.disableAutoSelect();
        google.accounts.id.revoke(user.email, (done) => {
          localStorage.clear();
          setIsAuthenticated(false);
        });
      });
    }
  }, []);

  return (
    <button id="google-signout" className="btn btn-outline-danger d-block">
      Salir
    </button>
  );
};
