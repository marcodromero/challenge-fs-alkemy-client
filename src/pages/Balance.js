import React from "react";
import { CardCurrentBalance } from "../components/cards/CardCurrentBalance";
import { BalanceList } from "../components/lists/BalanceList";

export const Balance = () => {
  return (
    <div className="container-fluid">
      <CardCurrentBalance />

      <BalanceList />
    </div>
  );
};
