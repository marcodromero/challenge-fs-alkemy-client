import { useEffect } from "react";
import { useGetBalance } from "../../hooks/useGetBalance";

export const CardCurrentBalance = () => {
  const { balance, getBalance } = useGetBalance();

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div
      className="card text-center  mb-1 border-0 text-light"
      style={{ backgroundColor: "#4cbcbf" }}
    >
      <div className="card-body">
        <h4 className="card-title">BALANCE ACTUAL</h4>
        <h1>${balance[0]?.amount}</h1>
        <small>{balance[0]?.date}</small>
      </div>
    </div>
  );
};
