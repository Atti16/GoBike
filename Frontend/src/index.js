import { useNavigate } from "react-router-dom";

function AuthPage() {
  const navigate = useNavigate(); // Használjuk a React Router navigate funkcióját
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
      navigate("/home"); // 🚀 Átirányítás a Home oldalra
    } else {
      alert('Érvénytelen felhasználónév vagy jelszó!');
    }
  };
}