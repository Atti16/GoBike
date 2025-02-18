document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.body;

    
    const container = document.createElement('div');
    container.classList.add('container');

    // Login form
    const loginFormContainer = document.createElement('div');
    loginFormContainer.id = 'login-form';
    loginFormContainer.classList.add('form-container');

    const loginHeader = document.createElement('h2');
    loginHeader.textContent = 'Bejelentkezés';
    loginFormContainer.appendChild(loginHeader);

    const loginForm = document.createElement('form');
    loginForm.id = 'login';

    const loginUsernameInput = document.createElement('input');
    loginUsernameInput.type = 'text';
    loginUsernameInput.id = 'login-username';
    loginUsernameInput.placeholder = 'Felhasználónév';
    loginUsernameInput.required = true;
    loginForm.appendChild(loginUsernameInput);

    const loginPasswordInput = document.createElement('input');
    loginPasswordInput.type = 'password';
    loginPasswordInput.id = 'login-password';
    loginPasswordInput.placeholder = 'Jelszó';
    loginPasswordInput.required = true;
    loginForm.appendChild(loginPasswordInput);

    const loginButton = document.createElement('button');
    loginButton.type = 'submit';
    loginButton.textContent = 'Bejelentkezés';
    loginForm.appendChild(loginButton);

    loginFormContainer.appendChild(loginForm);

    const loginSwitchText = document.createElement('p');
    loginSwitchText.innerHTML = 'Nincs még fiókod? <a href="#" id="show-register">Regisztrálj itt!</a>';
    loginFormContainer.appendChild(loginSwitchText);

    // Register form
    const registerFormContainer = document.createElement('div');
    registerFormContainer.id = 'register-form';
    registerFormContainer.classList.add('form-container');
    registerFormContainer.style.display = 'none';

    const registerHeader = document.createElement('h2');
    registerHeader.textContent = 'Regisztráció';
    registerFormContainer.appendChild(registerHeader);

    const registerForm = document.createElement('form');
    registerForm.id = 'register';

    const registerUsernameInput = document.createElement('input');
    registerUsernameInput.type = 'text';
    registerUsernameInput.id = 'register-username';
    registerUsernameInput.placeholder = 'Felhasználónév';
    registerUsernameInput.required = true;
    registerForm.appendChild(registerUsernameInput);

    const fullNameInput = document.createElement('input');
    fullNameInput.type = 'text';
    fullNameInput.id = 'full-name';
    fullNameInput.placeholder = 'Teljes név';
    fullNameInput.required = true;
    registerForm.appendChild(fullNameInput);

    const registerPasswordInput = document.createElement('input');
    registerPasswordInput.type = 'password';
    registerPasswordInput.id = 'register-password';
    registerPasswordInput.placeholder = 'Jelszó';
    registerPasswordInput.required = true;
    registerForm.appendChild(registerPasswordInput);

    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.id = 'confirm-password';
    confirmPasswordInput.placeholder = 'Jelszó megerősítése';
    confirmPasswordInput.required = true;
    registerForm.appendChild(confirmPasswordInput);

    const registerButton = document.createElement('button');
    registerButton.type = 'submit';
    registerButton.textContent = 'Regisztrálás';
    registerForm.appendChild(registerButton);

    registerFormContainer.appendChild(registerForm);

    const registerSwitchText = document.createElement('p');
    registerSwitchText.innerHTML = 'Már van fiókod? <a href="#" id="show-login">Jelentkezz be itt!</a>';
    registerFormContainer.appendChild(registerSwitchText);

    // Hozzáadjuk az űrlapokat a containerhez
    container.appendChild(loginFormContainer);
    container.appendChild(registerFormContainer);
    body.appendChild(container);

    // Regisztráció form kezelés
    document.getElementById('show-register').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
    });

    // Bejelentkezés form kezelés
    document.getElementById('show-login').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    });

    // Regisztráció beküldése
    document.getElementById('register').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        // Tároljuk a felhasználónevet és a jelszót a localStorage-ban
        localStorage.setItem(username, password);
        alert('Sikeres regisztráció! Most már be tudsz jelentkezni.');
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    });

    // Bejelentkezés beküldése
    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // A tárolt jelszó lekérése a localStorage-ból
        const storedPassword = localStorage.getItem(username);

        if (storedPassword === password) {
            alert('Sikeres bejelentkezés!');
            // Átirányítás a home.html oldalra
            window.location.href = 'home.html';
        } else {
            alert('Érvénytelen felhasználónév vagy jelszó!');
        }
    });
});
