import { useEffect, useState } from "react";
import { Alert } from "../Alert";
import { useOperationStore } from "../../store/operationStore";

export const FormUpdateOperation = () => {
  const initialDate = new Date().toISOString().substring(0, 10);
  const { operation, updateOperation, filled, message, error } =
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
        date: operation.formattedDate,
        id: operation.id,
      });
    }
  };

  useEffect(() => {
    setOperation();
    //Prevent the form from submitting.
    document.getElementById("formUpdate").onsubmit = () => {
      return false;
    };
  }, [operation]);

  return (
    <form className="d-flex flex-column" id="formUpdate">
      {/*input concept*/}
      <label htmlFor="updateConcept">Concepto</label>
      <input
        type="text"
        id="updateConcept"
        maxLength="50"
        required
        value={operationData.concept}
        onChange={(e) =>
          setOperationData({
            ...operationData,
            concept: e.target.value.trimStart(),
          })
        }
      />

      {/*input amount*/}
      <label htmlFor="updateAmount">Monto</label>
      <input
        type="number"
        step="0.01"
        id="updateAmount"
        min="-99999999.99"
        max="99999999.99"
        required
        value={operationData.amount}
        onChange={(e) =>
          setOperationData({ ...operationData, amount: e.target.value })
        }
      />

      {/*input date*/}
      <label htmlFor="updateDate">Fecha</label>
      <input
        type="date"
        id="updateDate"
        required
        max={initialDate}
        value={operationData.date}
        onChange={(e) =>
          setOperationData({ ...operationData, date: e.target.value })
        }
      />

      {/*send button*/}
      {!filled && (
        <input
          type="submit"
          className="btn btn-primary mt-4"
          onClick={() => {
            updateOperation(operationData);
          }}
          style={{ backgroundColor: "#4cbcbf", color: "#202426" }}
          id="buttonUpdate"
          value="Enviar"
        />
      )}

      {message && <Alert message={message} error={error} />}
    </form>
  );
};
