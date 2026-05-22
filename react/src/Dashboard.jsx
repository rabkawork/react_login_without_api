function Dashboard({ onLogout }) {
  const user = localStorage.getItem("user");

  return (
    <div className="container">
      <h2>Welcome {user}</h2>
      <p>Login berhasil ✅</p>

      <button
        onClick={() => {
          localStorage.removeItem("user");
          onLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;