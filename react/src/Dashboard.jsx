
import { useNavigate } from "react-router-dom";

function Dashboard({ onLogout }) {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome {user}</h2>
      <p>Login berhasil ✅</p>

      <button
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/"); // balik ke login
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;