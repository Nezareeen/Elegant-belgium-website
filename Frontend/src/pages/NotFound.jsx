import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>Pagina Niet Gevonden</h2>
          <p>De pagina die u zoekt bestaat niet of is verplaatst.</p>
          <Link to="/" className="btn primary">Terug naar Home</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;