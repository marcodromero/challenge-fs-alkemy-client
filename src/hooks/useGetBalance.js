import { useState } from "react";
import service from "../services/balance";

export const useGetBalance = () => {
  const [balance, setBalance] = useState([]);

  const getBalance = async () => {
    const response = await service.getBalance();
    setBalance(response);
  };

  return {
    getBalance,
    balance,
  };
};
