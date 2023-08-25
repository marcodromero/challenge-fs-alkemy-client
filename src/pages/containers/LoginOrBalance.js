import { Redirect } from "wouter";
import { Login } from "../Login";

export const LoginOrBalance = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Login />;
  }
  return <Redirect to="/balance" />;
};
