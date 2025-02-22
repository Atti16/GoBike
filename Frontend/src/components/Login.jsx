import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        navigate("/home");
    };

    return (
        <div>
            <h2>Bejelentkezés</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Jelszó" required />
                <button type="submit">Bejelentkezés</button>
            </form>
            <p>Még nincs fiókod? <button onClick={() => navigate("/register")}>Regisztráció</button></p>
        </div>
    );
}

export default Login;
