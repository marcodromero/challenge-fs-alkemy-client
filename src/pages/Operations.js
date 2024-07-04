import { BUTTON_VARIANTS, Button } from "../components/Button.js";
import { CardColumn, COLSIZE_VARIANTS } from "../components/CardColumn.js";
import { Card } from "../components/Card.js";
import { List } from "../components/List.js";
import { Modal } from "../components/Modal.js";
import { useOperationStore } from "../store/operationStore.js";
import { Header } from "../components/Header.js";
import { Form } from "../components/Form.js";
import { Alert } from "../components/Alert.js";
import { useEffect } from "react";
import { Select } from "../components/Select.js";
import { useAuthStore } from "../store/authStore.js";
import { useCategoryStore } from "../store/categoryStore.js";

export const Operations = () => {
  const {token} = useAuthStore();
  const { getOperations, operation, setOperation, operations, updateOperation, deleteOperation, resetStates, createOperation, message, filled, isError , setToken} = useOperationStore();
  const {categories, getCategories} = useCategoryStore();
  const initialDate = new Date().toISOString().substring(0, 10);
  const arrayTypes = [{id:'ingreso', name: "Ingreso"}, {id:'egreso', name: "Egreso"}];

   useEffect(() => {
   setToken(token);
   getOperations();
   getCategories();
  }, []);

  return (
    <div className="container-fluid">
      <Header title="OPERACIONES">
        <Button
          text="Agregar nueva"
          variant= {BUTTON_VARIANTS.NEW}
          type="button"
          size="normal"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdropModalFormSend"
          handle={()=>{
            resetStates();
            setOperation({
              amount: '',
              concept: '',
              type: '',
              date: initialDate
            });
          }}
        />
      </Header>
      <Select
            name="categoryId"
            id="categoryId"
            required
            defaultValue="DEFAULT"
            defaultTitle = "Todas las categorias"
            handle={(e) => getOperations(e.target.value)}
            dataArray = {categories}
      />
      <List title="Recientes">
        {operations[0] ? (       
        operations?.map((data) => (
            <Card  key={data.id} >
              <CardColumn variant= {COLSIZE_VARIANTS.SIZE3}>
                  <h5 className="card-text d-block" id="columnConcept">
                  {data.concept}
                </h5> 
              </CardColumn>
              <CardColumn variant= {COLSIZE_VARIANTS.SIZE2}>
                <h5
                  className=" mb-0"
                  id="columnAmount"
                  style={
                    data.amount < 0
                      ? { color: '#f74c54' }
                      : { color: '#4cbcbf' }
                  }
                >
                  ${data.amount}
                </h5>
              </CardColumn>
              <CardColumn variant= {COLSIZE_VARIANTS.SIZE3}>
                    <p className="card-text fst-italic text-secondary ">
                      {data.Category.name}
                    </p>
              </CardColumn>
              <CardColumn variant= {COLSIZE_VARIANTS.SIZE2}>
                <p className="card-text fst-italic text-secondary">
                {data.date}
                </p>
              </CardColumn>
                
              <CardColumn variant= {COLSIZE_VARIANTS.SIZE2}>
                <Button 
                    text="Actualizar"
                    variant= {BUTTON_VARIANTS.UPDATE}
                    size="small"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropModalFormUpdate"
                    handle={() => {
                        resetStates();
                        setOperation(data);
                    }}
                />
                <Button
                    text="Eliminar"
                    variant={BUTTON_VARIANTS.DELETE}
                    size="small"
                    type="submit"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdropModalFormDelete"
                    handle={() => {
                        resetStates();
                        setOperation(data);
                    }}
                />
              </CardColumn>                        
            </Card>
        ))
        ) : (
        <CardColumn variant={COLSIZE_VARIANTS.FULLSIZE}>
              <h5 className="card-text d-block alert alert-info text-center">
                  No hay operaciones para mostrar. Prueba filtrando por otra categoría o agregando una nueva operación.
              </h5>
        </CardColumn>)
        }
      </List>

      <Modal title="Nueva operación" id="staticBackdropModalFormSend">
        <Form id="formSend">
          <label htmlFor="concept">Concepto</label>
          <input
            type="text"
            id="concept"
            maxLength="50"
            required
            value={operation?.concept}
            onChange={(e) =>
              setOperation({
                ...operation,
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
            value={operation?.amount}
            onChange={(e) =>
              setOperation({ ...operation, amount: e.target.value })
            }
          />

          {/*input date*/}
          <label htmlFor="date">Fecha</label>
          <input
            type="date"
            id="date"
            required
            value={operation?.date}
            max={initialDate}
            onChange={(e) =>
              setOperation({ ...operation, date: e.target.value })
            }
          />

          {/*input type*/}
          <label htmlFor="type">Tipo</label>
          <Select 
            name="type"
            id="type"
            required
            defaultValue="DEFAULT"
            defaultTitle=" "
            handle={(e) =>
              setOperation({ ...operation, type: e.target.value })
            }
            dataArray = {arrayTypes}
          />
         
          <label htmlFor="categoryId">Categoría</label>
          <Select
            name="categoryId"
            id="categoryId"
            required
            defaultValue="DEFAULT"
            defaultTitle=" "
            handle={(e) =>
              setOperation({ ...operation, categoryId: e.target.value })
            }
            dataArray={categories}
          />        

          {!filled && (
            <Button
              type="submit"
              variant= {BUTTON_VARIANTS.PRIMARY}
              handle={(e) => {
                e.preventDefault();
                createOperation(operation);
              }}
              id="buttonSend"
              text="Enviar"
            />
          )}

          {filled && (
            <Button
              type ="button"
              variant= {BUTTON_VARIANTS.PRIMARY}
              handle={() => {
                resetStates();
                setOperation();
              }}
              text = "Continuar"
            />
          )}

          {message && <Alert message={message} isError={isError} />}
        </Form>
      </Modal>
      <Modal title="Modificar operación" id="staticBackdropModalFormUpdate">
        <Form id="formUpdate">
          {/*input concept*/}
          <label htmlFor="updateConcept">Concepto</label>
          <input
            type="text"
            id="updateConcept"
            maxLength="50"
            required
            value={operation?.concept}
            onChange={(e) =>
              setOperation({
                ...operation,
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
            value={operation?.amount}
            onChange={(e) =>
              setOperation({ ...operation, amount: e.target.value })
            }
          />

          {/*input date*/}
          <label htmlFor="updateDate">Fecha</label>
          <input
            type="date"
            id="updateDate"
            required
            max={initialDate}
            value={operation?.formattedDate}
            onChange={(e) =>
              setOperation({ ...operation, date: e.target.value })
            }
          />

          {/*send button*/}
          {!filled && (
            <Button
              type="submit"
              variant= {BUTTON_VARIANTS.PRIMARY}
              handle={(e) => {
                e.preventDefault();
                updateOperation(operation);
              }}
              id="buttonUpdate"
              text="Enviar"
            />
          )}

          {message && <Alert message={message} isError={isError} />}
        </Form>
      </Modal>
      <Modal
        title="Confirme que desea eliminar la operación"
        id="staticBackdropModalFormDelete"
      >
        <Form>
          <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item" id="deleteAmount">
              {" "}
              {operation?.amount}{" "}
            </li>
            <li className="list-group-item" id="deleteDate">
              {" "}
              {operation?.date}{" "}
            </li>
            <li className="list-group-item" id="deleteConcept">
              {" "}
              {operation?.concept}{" "}
            </li>
          </ul>
          </div>

      {message && <Alert 
                    message={message} 
                    isError={isError} 
                  />}

      {!filled && (<Button
          type="submit"
          handle={(e) => {
            e.preventDefault();
            deleteOperation(operation?.id);
          }}
          variant= {BUTTON_VARIANTS.PRIMARY}
          id="buttonDelete"
          text= "Confirmar"
        />)}
        </Form>
      </Modal>
    </div>
  );
};
