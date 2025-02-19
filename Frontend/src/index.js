import React, { useState } from 'react';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      localStorage.setItem(username, password);
      alert('Sikeres regisztráció! Most már be tudsz jelentkezni.');
      setIsLogin(true);
      resetForm();
    } else {
      alert('A jelszavak nem egyeznek meg!');
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      alert('Sikeres bejelentkezés!');
      // Átirányítás a home oldalra (például React Router-t használhatsz itt)
      window.location.href = 'home.html';
    } else {
      alert('Érvénytelen felhasználónév vagy jelszó!');
    }
  };

  const resetForm = () => {
    setUsername('');
    setPassword('');
    setFullName('');
    setConfirmPassword('');
  };

  return (
    <div style={styles.container}>
      {isLogin ? (
        <div style={styles.formContainer}>
          <h2>Bejelentkezés</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="text"
              placeholder="Felhasználónév"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Jelszó"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Bejelentkezés
            </button>
          </form>
          <p>
            Nincs még fiókod?{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(false);
              }}
              style={styles.link}
            >
              Regisztrálj itt!
            </a>
          </p>
        </div>
      ) : (
        <div style={styles.formContainer}>
          <h2>Regisztráció</h2>
          <form onSubmit={handleRegisterSubmit}>
            <input
              type="text"
              placeholder="Felhasználónév"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="text"
              placeholder="Teljes név"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Jelszó"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Jelszó megerősítése"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Regisztrálás
            </button>
          </form>
          <p>
            Már van fiókod?{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(true);
              }}
              style={styles.link}
            >
              Jelentkezz be itt!
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#218838',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default AuthPage;
