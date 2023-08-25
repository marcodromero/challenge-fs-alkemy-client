import React from "react";

export const CardInfoOperations = () => {
  return (
    <div
      className="card text-center  mb-1 border-0 text-light"
      style={{ backgroundColor: "#69bdbf" }}
    >
      <select
        className="form-select form-select-sm"
        name="type"
        id="type"
        required
        defaultValue="DEFAULT"
      >
        <option value="DEFAULT" disabled></option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
      </select>
      <div
        className="card text-center  mb-1 border-0 text-light"
        style={{ backgroundColor: "#69bdbf" }}
      >
        <section className="d-flex">
          <div className="card-body">
            <small className="card-title">Ingresos</small>
            <h1>$4100</h1>
          </div>
          <div className="card-body">
            <small className="card-title">Egresos</small>
            <h1>$3100</h1>
          </div>
        </section>
      </div>
    </div>
  );
};
