import { ButtonAction, ButtonDelete } from "../buttons/ButtonDelete";
import { ButtonUpdate } from "../buttons/ButtonUpdate";

export const OperationCard = ({ operation }) => {
  return (
    <li className="list-group-item">
      <div className="container card-body d-lg-flex justify-content-lg-between w-100">
        <div className="row d-flex align-items-center w-100">
          <div className="col-12 col-md-3 mb-1 mb-md-0">
            <h5 className="card-text d-block" id="columnConcept">
              {operation.concept}
            </h5>
          </div>
          <div className="col-12 col-md-2 mb-2 mb-md-0">
            <h5
              className=" mb-0"
              id="columnAmount"
              style={
                operation.amount < 0
                  ? { color: "#f74c54" }
                  : { color: "#4cbcbf" }
              }
            >
              ${operation.amount}
            </h5>
          </div>
          <div className="col-12 col-md-3">
            <p className="card-text fst-italic text-secondary ">
              {operation.Category.name}
            </p>
          </div>
          <div className="col-12 col-md-2">
            <p className="card-text fst-italic text-secondary">
              {operation.date}
            </p>
          </div>
          <div className="col-12 col-md-2">
            <ButtonUpdate operation={operation} />
            <ButtonDelete operation={operation} />
          </div>
        </div>
      </div>
    </li>
  );
};
