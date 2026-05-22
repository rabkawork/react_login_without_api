import { useState } from 'react';
import { useNavigate } from "react-router-dom";
function Login({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {

        if(username === "" && password  === "") {
            alert('Mohon isi username dan password anda');
        } else {
            
            if (username === "admin" && password === "123") {
                localStorage.setItem("user", username);
                
                navigate("/dashboard"); // 🚀 pindah halaman

                //onLogin();
            } else {
                alert("Username / Password salah");
            }

        }
    };


    return (
        
        <div className="container">
            <h2>Login</h2>
            <input
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
        </div>

    );
}

export default Login;