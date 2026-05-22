import { useState, useEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import "./styles.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  // cek session saat app dibuka
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      {isLogin ? (
        <Dashboard onLogout={() => setIsLogin(false)} />
      ) : (
        <Login onLogin={() => setIsLogin(true)} />
      )}
    </>
  );
}

export default App;