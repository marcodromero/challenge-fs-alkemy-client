import React from "react";
import { useOperationStore } from "../../store/operationStore";

export const ButtonNewOperation = () => {
  const { resetStates } = useOperationStore();
  return (
    <button
      className="btn  "
      style={{ backgroundColor: "#84c9cc", color: "#202426" }}
      data-bs-toggle="modal"
      data-bs-target="#staticBackdropModalFormSend"
      onClick={resetStates}
    >
      Agregar nueva
    </button>
  );
};
