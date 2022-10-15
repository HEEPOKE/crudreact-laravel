import AppRouter from "./AppRouter";
import NavbarMenu from "./components/header/Navbar";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/main.css";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <AppRouter />
    </div>
  );
}

export default App;
