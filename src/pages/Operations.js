import { CardNewOperation } from "../components/cards/CardNewOperation.js";
import { FormDeleteOperation } from "../components/forms/FormDeleteOperation.js";
import { FormNewOperation } from "../components/forms/FormNewOperation.js";
import { FormUpdateOperation } from "../components/forms/FormUpdateOperation.js";
import { OperationsList } from "../components/lists/OperationsList.js";
import { Modal } from "../components/Modal.js";

export const Operations = () => {
  return (
    <div className="container-fluid">
      <CardNewOperation />
      <OperationsList />

      <Modal title="Nueva operación" id="staticBackdropModalFormSend">
        <FormNewOperation />
      </Modal>

      <Modal title="Modificar operación" id="staticBackdropModalFormUpdate">
        <FormUpdateOperation />
      </Modal>

      <Modal
        title="Confirme que desea eliminar la operación"
        id="staticBackdropModalFormDelete"
      >
        <FormDeleteOperation />
      </Modal>
    </div>
  );
};
