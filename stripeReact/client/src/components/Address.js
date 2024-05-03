import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Address.css";

const Address = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phoneNumber && address) {
      // All fields are filled, submit the form
      console.log("Form submitted:", { name, phoneNumber, address });
      setFormSubmitted(true); // Optional: Set a flag indicating form submission
      nav('/cart');

    } else {
      // If any field is missing, display an error message
      alert("Please fill in all fields before submitting.");
    }
  };

  return (
    <div className="address-container" style={{marginTop:'2%'}}>
      <h2 className="address-heading">Enter Billing Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            className="form-control"
            id="address"
            rows="3"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary submit-btn">
          Submit
        </button>
        {formSubmitted && (
          <p className="success-message">Form submitted successfully!</p>
        )}
      </form>
    </div>
  );
};

export default Address;
