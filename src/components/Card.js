export const Card = ({children }) => {
  return (
    <li className="list-group-item">
      <div className="container card-body d-lg-flex justify-content-lg-between w-100">
        <div className="row d-flex align-items-center w-100">
          {children}
        </div>
      </div>
    </li>
  );
};