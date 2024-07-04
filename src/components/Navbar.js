import { useAuthStore } from "../store/authStore";
import { Link } from "wouter";

export const Navbar = () => {
  const { user, setIsAuthenticated, logout } = useAuthStore();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: "#4cbcbf" }}
    >
      <div className="container-fluid">
        {/*navbar title*/}
        <Link className="navbar-brand" href="/">
          GASTOS E INGRESOS
        </Link>

        {/*responsive button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/*navbar items*/}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/balance" className="nav-link">
                Balance
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/operations" className="nav-link">
                Operaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/"  className="nav-link" onClick={logout}>
                Salir
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
