import { useEffect } from "react";
import { useGetBalance } from "../../hooks/useGetBalance";
import { BalanceCard } from "../cards/BalanceCard";
import { useAuthStore } from "../../store/authStore";

export const BalanceList = () => {
  const { balance, getBalance } = useGetBalance();
  const { setIsAuthenticated, user } = useAuthStore();

  useEffect(() => {
    getBalance();
  }, []);

  useEffect(() => {
    if (balance.msg === "Invalid token") {
      if (window.google) {
        const google = window.google;
        google.accounts.id.disableAutoSelect();
        google.accounts.id.revoke(user.email, (done) => {
          localStorage.clear();
          setIsAuthenticated(false);
        });
      }
    }
  }, [balance]);

  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        <h6 className="text-center mt-4">HISTORIAL</h6>

        {balance[0] ? (
          Array.isArray(balance) &&
          balance?.map((bal) => <BalanceCard balance={bal} key={bal.id} />)
        ) : (
          <li className="list-group-item">
            <div className="container card-body d-lg-flex justify-content-lg-between w-100">
              <div className="row d-flex align-items-center w-100">
                <div className="col-12 ">
                  <h5 className="card-text d-block alert alert-info text-center">
                    El historial de balances está vacio. Los balances se iran
                    generando a medida que agregues operaciónes.
                  </h5>
                </div>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};
