import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ListProducts from "./pages/ListProducts";
import Create from "./pages/List/Create";
import Edit from "./pages/List/Edit";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products/show" element={<ListProducts />} />
      <Route path="/products/create" element={<Create />} />
      <Route path="/products/edit/:id" element={<Edit />} />
    </Routes>
  );
}

export default AppRouter;
