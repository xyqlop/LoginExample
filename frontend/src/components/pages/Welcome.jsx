import { Navigate } from "react-router-dom";

function Welcome() {
  const token = localStorage.getItem("token");
  return token ? <Navigate to={"/home"} /> : <Navigate to={"/login"} />;
}

export default Welcome;
