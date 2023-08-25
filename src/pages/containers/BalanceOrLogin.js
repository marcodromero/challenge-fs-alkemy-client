import { Redirect } from "wouter";
import { Balance } from "../Balance";

export const BalanceOrLogin = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Balance />;
  }
  return <Redirect to="/" />;
};
