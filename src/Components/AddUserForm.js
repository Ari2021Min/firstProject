import React, { useState } from 'react';

const AddUserForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAddUser = async (e) => {
    e.preventDefault();

    try {
      // Hier rufst du die API oder die Funktion auf, um den Benutzer hinzuzufügen
      // Du kannst axios oder fetch verwenden, um eine HTTP-Anfrage an deine API zu senden
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Benutzer erfolgreich hinzugefügt
        setUsername('');
        setEmail('');
        setPassword('');
        // Hier kannst du weitere Aktionen ausführen, z. B. eine Bestätigungsnachricht anzeigen
      } else {
        // Fehler beim Hinzufügen des Benutzers
        console.error('Fehler beim Hinzufügen des Benutzers:', response);
      }
    } catch (error) {
      console.error('Fehler beim Hinzufügen des Benutzers:', error);
    }
  };

  return (
    <div>
      <h2>Benutzer hinzufügen</h2>
      <form onSubmit={handleAddUser}>
        <label htmlFor="username">Benutzername:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="email">E-Mail-Adresse:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Passwort:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Benutzer hinzufügen</button>
      </form>
    </div>
  );
};

export default AddUserForm;

