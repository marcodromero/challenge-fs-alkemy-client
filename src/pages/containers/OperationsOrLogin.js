import { Redirect } from "wouter";
import { Operations } from "../Operations";

export const OperationsOrLogin = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Operations />;
  }
  return <Redirect to="/" />;
};
