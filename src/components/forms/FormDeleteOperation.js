import { useEffect, useState } from "react";
import { useOperationStore } from "../../store/operationStore";
import { Alert } from "../Alert";

export const FormDeleteOperation = () => {
  const { operation, deleteOperation, message, filled, error } =
    useOperationStore();

  const [operationData, setOperationData] = useState({
    concept: "",
    amount: "",
    date: "",
    id: "",
  });

  const setOperation = () => {
    if (operation) {
      setOperationData({
        concept: operation.concept,
        amount: operation.amount,
        date: operation.date,
        id: operation.id,
      });
    }
  };

  useEffect(() => {
    setOperation();
  }, [operation]);

  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item" id="deleteAmount">
            {" "}
            {operationData.amount}{" "}
          </li>
          <li className="list-group-item" id="deleteDate">
            {" "}
            {operationData.date}{" "}
          </li>
          <li className="list-group-item" id="deleteConcept">
            {" "}
            {operationData.concept}{" "}
          </li>
        </ul>
      </div>
      {message && <Alert message={message} error={error} />}

      {!filled && (
        <button
          type="submit "
          onClick={() => {
            deleteOperation(operationData.id);
          }}
          style={{ backgroundColor: "#4cbcbf", color: "#202426" }}
          className="btn btn-primary mt-4"
          id="buttonDelete"
        >
          Confirmar
        </button>
      )}
    </>
  );
};
