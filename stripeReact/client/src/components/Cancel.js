import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './Cancel.css';

const Cancel = () => {
  return (
    <div className="cancel-container">
      <div className="cancel-icon">
        <FontAwesomeIcon icon={faTimesCircle} size="4x" color="red" />
      </div>
      <h2 className="cancel-heading">Order Cancelled</h2>
      <p className="cancel-message">We're sorry to see you go. If you have any questions, feel free to contact us.</p>
      <Link to="/" className="cancel-link">
        <button className="cancel-btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default Cancel;
