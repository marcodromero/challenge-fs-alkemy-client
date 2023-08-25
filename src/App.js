import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route } from "wouter";
import { React, useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import { BalanceOrLogin } from "./pages/containers/BalanceOrLogin";
import { LoginOrBalance } from "./pages/containers/LoginOrBalance";
import { OperationsOrLogin } from "./pages/containers/OperationsOrLogin";

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <main style={{ backgroundColor: "#4cbcbf" }}>
      <Route path="/">
        <LoginOrBalance isAuthenticated={isAuthenticated} />
      </Route>

      <Route path="/balance">
        <Navbar />
        <BalanceOrLogin isAuthenticated={isAuthenticated} />
      </Route>

      <Route path="/operations">
        <Navbar />
        <OperationsOrLogin isAuthenticated={isAuthenticated} />
      </Route>
    </main>
  );
}

export default App;
