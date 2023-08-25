export const BalanceCard = ({ balance }) => {
  return (
    <li className="list-group-item">
      <div className="card-body d-lg-flex justify-content-lg-between">
        <h5
          id="columnAmount"
          style={
            balance.amount < 0 ? { color: "#f74c54" } : { color: "#4cbcbf" }
          }
        >
          ${balance.amount}
        </h5>

        <p className="card-text fst-italic text-secondary">{balance.date}</p>
      </div>
    </li>
  );
};
