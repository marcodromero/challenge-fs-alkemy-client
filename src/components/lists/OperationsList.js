import { useEffect, useState } from "react";
import { OperationCard } from "../cards/OperationCard";
import { useAuthStore } from "../../store/authStore";
import { useOperationStore } from "../../store/operationStore";
import { getCategories } from "../../services/categories";

export const OperationsList = () => {
  const { operations, getOperations } = useOperationStore();
  const { setIsAuthenticated, user } = useAuthStore();

  const [categories, setCategories] = useState([]);
  const test = async () => {
    const response = await getCategories();
    if (response.ok) {
      setCategories(await response.json());
    }
  };

  useEffect(() => {
    test();
    getOperations();
  }, []);

  return (
    <div className="card">
      <ul className="container-fluid list-group list-group-flush">
        <div className="row">
          <div className="col-6 col-md-2">
            <select
              name="categoryId"
              className="form-select form-select-sm"
              id="categoryId"
              required
              defaultValue="DEFAULT"
              onChange={(e) => getOperations(e.target.value)}
            >
              <option value=""> Todas las categorias </option>
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {operations[0] ? (
          Array.isArray(operations) &&
          operations?.map((operation) => (
            <OperationCard operation={operation} key={operation.id} />
          ))
        ) : (
          <li className="list-group-item">
            <div className="container card-body d-lg-flex justify-content-lg-between w-100">
              <div className="row d-flex align-items-center w-100">
                <div className="col-12 ">
                  <h5 className="card-text d-block alert alert-info text-center">
                    No hay operaciones para mostrar. Prueba filtrando por otra
                    categoría o agregando una nueva operación.
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
