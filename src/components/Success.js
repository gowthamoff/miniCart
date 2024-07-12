import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./Success.css";

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-icon">
        <FontAwesomeIcon icon={faCheckCircle} size="4x" color="green" />
      </div>
      <h2 className="success-heading">Order Successful!</h2>
      <p className="success-message">
        Thank you for your order. Your items will be shipped soon.
      </p>
      <Link to="/" className="success-link">
        <button className="back-to-home-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default Success;
