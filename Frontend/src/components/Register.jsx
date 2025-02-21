import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        // Itt lenne a regisztrációs logika (API hívás stb.)
        navigate("/home"); // Sikeres regisztráció után átirányítás a főoldalra
    };

    return (
        <div>
            <h2>Regisztráció</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Név" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Jelszó" required />
                <button type="submit">Regisztráció</button>
            </form>
            <p>Van már fiókod? <button onClick={() => navigate("/")}>Bejelentkezés</button></p>
        </div>
    );
}

export default Register;
