import React from 'react';

const LoginLabel = () => {
  return (
    <div>
      <label htmlFor="email">E-Mail-Adresse:</label>
      <input type="email" id="email" />

      <label htmlFor="password">Passwort:</label>
      <input type="password" id="password" />
    </div>
  );
}

export default LoginLabel;
