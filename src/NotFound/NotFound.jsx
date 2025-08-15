import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={`${styles.container} d-flex flex-column justify-content-center align-items-center text-center px-3`}>
      <h1 className={`display-1 fw-bold text-success ${styles.bounce}`}>404</h1>
      <h2 className="fw-bold text-dark">Oops! Page not found</h2>
      <p className="text-muted mb-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-success shadow px-4 py-2">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
