import { useNavigate } from "react-router-dom";

function BtnLogout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-medium py-1 px-2 w-full rounded transition duration-300 ease-in-out text-center"
    >
      Logout
    </button>
  );
}

export default BtnLogout;
