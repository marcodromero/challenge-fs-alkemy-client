import { ButtonNewOperation } from "../buttons/ButtonNew";

export const CardNewOperation = () => {
  return (
    <div
      className="card text-center mb-1 border-0"
      style={{ backgroundColor: "#4cbcbf" }}
    >
      <h4 className="text-light">OPERACIONES</h4>
      <div className="card-body">
        <ButtonNewOperation />
      </div>
    </div>
  );
};
