import { useEffect } from "react";
import { useAuthStore } from "../../store/authStore";
import { setToken as serviceOperationsSetToken } from "../../services/operations";
import { setToken as serviceBalanceSetToken } from "../../services/balance";
const baseUrl = `${process.env.REACT_APP_SERVERIP}`;

export const ButtonGoogleSignin = () => {
  const { setIsAuthenticated, setUser } = useAuthStore();

  const checkSession = () => {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    if (userLocal) {
      setUser({
        name: userLocal.name,
        picture: userLocal.picture,
        email: userLocal.email,
      });
      serviceOperationsSetToken(userLocal.token);
      serviceBalanceSetToken(userLocal.token);
      setIsAuthenticated(true);
    }
  };

  const handleCredentialResponse = async (response) => {
    const credential = { id_token: response.credential };
    await fetch(`${baseUrl}/auth/google`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credential),
    })
      .then(async (resp) => await resp.json())
      .then((resp) => {
        setUser({
          name: resp.user.name,
          picture: resp.user.picture,
          email: resp.user.email,
        });
        serviceOperationsSetToken(resp.token);
        serviceBalanceSetToken(resp.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: resp.user.name,
            email: resp.user.email,
            picture: resp.user.picture,
            token: resp.token,
          })
        );

        setIsAuthenticated(true);
      })
      .catch(console.warn);
  };

  const configButtonSignin = () => {
    if (window.google) {
      const google = window.google;

      //button sign-in
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
      });

      google.accounts.id.renderButton(document.getElementById("g_signin"), {
        type: "standard",
        size: "large",
        theme: "outline",
        shape: "rectangular",
        logo_alignment: "left",
      });
    }
  };

  useEffect(() => {
    checkSession();
    configButtonSignin();
  }, []);

  return (
    <div className="d-flex">
      <div id="g_signin" className="d-block m-auto"></div>
    </div>
  );
};
