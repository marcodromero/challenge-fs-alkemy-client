import { useState } from "react";
import { getBalance as serviceGetBalance } from "../services/balance";

export const useGetBalance = () => {
  const [balance, setBalance] = useState([]);

  const getBalance = async () => {
    const response = await serviceGetBalance();
    setBalance(response);
  };

  return {
    getBalance,
    balance,
  };
};
