import React, { useEffect } from "react";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { COLSIZE_VARIANTS, CardColumn } from "../components/CardColumn";
import { Header } from "../components/Header";
import { useBalanceStore } from "../store/balanceStore";
import { useAuthStore } from "../store/authStore";

export const Balance = () => {
   const {token} = useAuthStore();
   const {balance, getBalance, setToken} = useBalanceStore();
   
   useEffect(()=>{
    setToken(token);
    getBalance();
   },[]);

  return (
    <div className="container-fluid">
      <Header title={'BALANCES'}>
        <h1>${balance[0]?.amount}</h1>
        <small>{balance[0]?.date}</small>
      </Header>
      <List title="Recientes">
         {balance[0] ? (
               balance?.map((data) => (
                    <Card  key={data.id} >
                      <CardColumn variant={COLSIZE_VARIANTS.SIZE6}>
                          <h5
                            id="columnAmount"
                            style={
                              data.amount < 0 ? { color: "#f74c54" } : { color: "#4cbcbf" }
                            }
                          >
                            ${data.amount}
                          </h5>
                      </CardColumn>
                      <CardColumn variant={COLSIZE_VARIANTS.SIZE6}>
                         <p className="card-text fst-italic text-secondary">{data.date}</p>
                      </CardColumn>
                    </Card>                      
                ))
                ) : (
                  <CardColumn variant={COLSIZE_VARIANTS.FULLSIZE}>
                        <h5 className="card-text d-block alert alert-info text-center">
                            El historial de balances está vacio. Los balances se iran generando a medida que agregues operaciónes.
                        </h5>
                  </CardColumn>
          )}
      </List>
    </div>
  );
};
