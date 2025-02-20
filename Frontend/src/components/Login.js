import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // Ide jönne az autentikációs logika (API hívás stb.)
        navigate("/home"); // Sikeres bejelentkezés után átirányítunk a főoldalra
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
