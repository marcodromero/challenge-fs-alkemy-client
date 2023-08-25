import { useState, useEffect } from "react";
import { Alert } from "../Alert";
import { useOperationStore } from "../../store/operationStore";
import { getCategories } from "../../services/categories";

export const FormNewOperation = () => {
  const initialDate = new Date().toISOString().substring(0, 10);

  const { createOperation, message, filled, error, resetStates } =
    useOperationStore();

  const [operationData, setOperationData] = useState({
    concept: "",
    amount: "",
    date: initialDate,
    type: "",
  });

  const resetOperationData = () => {
    setOperationData({
      concept: "",
      amount: "",
      date: initialDate,
      type: "",
    });
  };

  const [categories, setCategories] = useState([]);
  const test = async () => {
    const response = await getCategories();
    if (response.ok) {
      setCategories(await response.json());
    }
  };

  useEffect(() => {
    test();
    document.getElementById("formSend").onsubmit = () => {
      return false;
    };
  }, [message]);

  return (
    <form className="d-flex flex-column" id="formSend">
      {/*input concept*/}
      <label htmlFor="concept">Concepto</label>
      <input
        type="text"
        id="concept"
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
      <label htmlFor="amount">Monto</label>
      <input
        type="number"
        step="0.01"
        id="amount"
        maxLength="10"
        required
        value={operationData.amount}
        onChange={(e) =>
          setOperationData({ ...operationData, amount: e.target.value })
        }
      />

      {/*input date*/}
      <label htmlFor="date">Fecha</label>
      <input
        type="date"
        id="date"
        required
        value={operationData.date}
        max={initialDate}
        onChange={(e) =>
          setOperationData({ ...operationData, date: e.target.value })
        }
      />

      {/*input type*/}
      <label htmlFor="type">Tipo</label>
      <select
        name="type"
        id="type"
        required
        defaultValue="DEFAULT"
        onChange={(e) =>
          setOperationData({ ...operationData, type: e.target.value })
        }
      >
        <option value="DEFAULT" disabled></option>
        <option value="ingreso">Ingreso</option>
        <option value="egreso">Egreso</option>
      </select>

      {/*input category*/}
      <label htmlFor="categoryId">Categoría</label>
      <select
        name="categoryId"
        id="categoryId"
        required
        defaultValue="DEFAULT"
        onChange={(e) =>
          setOperationData({ ...operationData, categoryId: e.target.value })
        }
      >
        <option value="DEFAULT" disabled></option>
        {categories.map((category) => (
          <option value={category.id} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      {/*send button*/}
      {!filled && (
        <input
          type="submit"
          className="btn mt-4"
          style={{ backgroundColor: "#4cbcbf", color: "#202426" }}
          onClick={() => {
            createOperation(operationData);
          }}
          id="buttonSend"
          value="Enviar"
        />
      )}

      {filled && (
        <button
          className="btn  mt-4"
          style={{ backgroundColor: "#4cbcbf", color: "#202426" }}
          onClick={() => {
            resetStates();
            resetOperationData();
          }}
        >
          Continuar
        </button>
      )}

      {message && <Alert message={message} error={error} />}
    </form>
  );
};
