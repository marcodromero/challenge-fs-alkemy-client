import { useOperationStore } from "../../store/operationStore";

export const ButtonUpdate = ({ operation }) => {
  const { setOperation, resetStates } = useOperationStore();

  return (
    <button
      type="button"
      className="btn btn-sm"
      style={{ backgroundColor: "#ffd764", color: "#202426" }}
      data-bs-toggle="modal"
      data-bs-target="#staticBackdropModalFormUpdate"
      onClick={() => {
        resetStates();
        setOperation(operation);
      }}
    >
      Modificar
    </button>
  );
};
