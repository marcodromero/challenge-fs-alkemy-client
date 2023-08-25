import { useOperationStore } from "../../store/operationStore";

export const ButtonDelete = ({ operation }) => {
  const { setOperation, resetStates } = useOperationStore();

  return (
    <button
      type="button"
      className="btn  btn-sm m-2"
      style={{ backgroundColor: "#f76c73", color: "#202426" }}
      data-bs-toggle="modal"
      data-bs-target="#staticBackdropModalFormDelete"
      onClick={() => {
        resetStates();
        setOperation(operation);
      }}
    >
      Eliminar
    </button>
  );
};
