import AppRouter from "./AppRouter";
import NavbarMenu from "./components/header/Navbar";
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
