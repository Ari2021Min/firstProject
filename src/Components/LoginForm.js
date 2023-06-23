import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Hier rufst du die API oder die Funktion auf, um die Login-Daten zu überprüfen
      // Du kannst axios oder fetch verwenden, um eine HTTP-Anfrage an deine API zu senden
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Anmeldung erfolgreich
        setLoginError('');
        // Hier kannst du die Benutzerdaten speichern oder eine Weiterleitung durchführen
      } else {
        // Anmeldung fehlgeschlagen
        const errorData = await response.json();
        setLoginError(errorData.message);
      }
    } catch (error) {
      console.error('Fehler bei der Anmeldung:', error);
      setLoginError('Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {loginError && <p>{loginError}</p>}
      <form onSubmit={handleLogin}>
        <label htmlFor="email">E-Mail-Adresse:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Passwort:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Anmelden</button>
      </form>
    </div>
  );
};

export default LoginForm;
