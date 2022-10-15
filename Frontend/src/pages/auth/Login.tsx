import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const pathHome = () => {
    navigate("/home");
  };

  return (
    <div className="showcase text-center">
      <h1>login</h1>
      <button onClick={pathHome}>go home</button>
    </div>
  );
}
